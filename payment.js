// ============================================================
//  МОДУЛЬ ОПЛАТЫ — bePaid (Беларусь)
//  Режим задаётся в products.js → SHOP_CONFIG.payment.mode:
//    'demo'   — имитация оплаты (для проверки сайта)
//    'bepaid' — боевая/тестовая оплата через bePaid
//               (нужен Cloudflare Worker, см. worker.js и README)
//    'link'   — переход по готовой платёжной ссылке из кабинета
// ============================================================

window.startPayment = function (order, onSuccess) {
  const cfg = (window.SHOP_CONFIG.payment) || { mode: "demo" };

  // ---------- bePaid через воркер ----------
  if (cfg.mode === "bepaid" && cfg.bepaidTokenUrl) {
    const btn = document.querySelector("#checkoutBody .btn-blue");
    if (btn) { btn.textContent = "Создаём платёж…"; btn.disabled = true; }

    fetch(cfg.bepaidTokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Math.round(order.total * 100), // BYN → копейки
        currency: window.SHOP_CONFIG.currency || "BYN",
        description: "Заказ в " + window.SHOP_CONFIG.shopName +
          ": " + order.items.map(i => i.name + " ×" + i.qty).join(", "),
        customer: order.customer,
        items: order.items,
        success_url: location.href.split("#")[0] + "#paid",
        decline_url: location.href.split("#")[0] + "#fail"
      })
    })
      .then(r => r.json())
      .then(data => {
        if (!data.token) throw new Error(data.error || "Нет токена");
        // открываем виджет bePaid поверх сайта
        loadScript("https://js.bepaid.by/widget/be_gateway.js", () => {
          try {
            new BeGateway({
              checkout_url: "https://checkout.bepaid.by",
              token: data.token,
              closeWidget: status => {
                // successful | failed | pending | redirected | error | null(закрыл сам)
                if (status === "successful") onSuccess(order);
                else if (btn) { btn.textContent = "Оплатить"; btn.disabled = false; }
              }
            }).createWidget();
          } catch (e) {
            // если виджет не загрузился — открываем платёжную страницу
            window.location.href = data.redirect_url;
          }
        });
      })
      .catch(err => {
        alert("Не удалось создать платёж. Попробуйте ещё раз или свяжитесь с нами.\n" + (err.message || ""));
        if (btn) { btn.textContent = "Оплатить", btn.disabled = false; }
      });
    return;
  }

  // ---------- платёжная ссылка из кабинета bePaid ----------
  if (cfg.mode === "link" && cfg.paymentLink) {
    window.open(cfg.paymentLink, "_blank");
    onSuccess(order);
    return;
  }

  // ---------- демо-режим ----------
  setTimeout(() => onSuccess(order), 900);
};

// ---------- уведомление о заказе «в 1 клик» (без онлайн-оплаты) ----------
// Шлёт заявку на тот же воркер, что и bePaid (он пересылает в Telegram).
// В демо-режиме просто молча проходит.
window.notifyOrder = function (order) {
  const cfg = (window.SHOP_CONFIG && window.SHOP_CONFIG.payment) || {};
  const url = cfg.orderNotifyUrl || cfg.bepaidTokenUrl;
  if (!url) return; // демо — ничего не шлём
  try {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        notifyOnly: true,
        oneClick: true,
        customer: order.customer,
        items: order.items,
        total: order.total,
        shop: (window.SHOP_CONFIG && window.SHOP_CONFIG.shopName) || ""
      })
    }).catch(() => {});
  } catch (e) {}
};

function loadScript(src, cb) {
  if (document.querySelector('script[src="' + src + '"]')) { cb(); return; }
  const s = document.createElement("script");
  s.src = src; s.onload = cb;
  s.onerror = cb; // упадём в fallback-редирект
  document.head.appendChild(s);
}

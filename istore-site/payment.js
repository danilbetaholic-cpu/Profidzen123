// ============================================================
//  МОДУЛЬ ОПЛАТЫ — bePaid / WebPay / ЕРИП (Беларусь)
//  Режим задаётся в products.js → SHOP_CONFIG.payment.mode
// ============================================================

window.startPayment = function (order, onSuccess) {
  const cfg = (window.SHOP_CONFIG.payment) || { mode: "demo" };

  // ---------- РЕЖИМ 1: bePaid виджет ----------
  // Требуется свой мини-бэкенд, который по секретному ключу bePaid
  // создаёт checkout-токен (см. README.md). Сюда указывается его URL.
  if (cfg.mode === "bepaid" && cfg.bepaidTokenUrl) {
    fetch(cfg.bepaidTokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Math.round(order.total * 100), // в копейках
        currency: window.SHOP_CONFIG.currency || "BYN",
        description: "Заказ в " + window.SHOP_CONFIG.shopName,
        customer: order.customer,
        items: order.items
      })
    })
      .then(r => r.json())
      .then(data => {
        if (!data.token) throw new Error("Нет токена");
        loadScript("https://js.bepaid.by/widget/be_gateway.js", () => {
          new BeGateway({
            checkout_url: "https://checkout.bepaid.by",
            token: data.token,
            closeWidget: status => {
              if (status === "successful") onSuccess(order);
            }
          }).createWidget();
        });
      })
      .catch(() => alert("Ошибка оплаты. Попробуйте ещё раз или свяжитесь с нами."));
    return;
  }

  // ---------- РЕЖИМ 2: платёжная ссылка ----------
  // Готовая ссылка из кабинета bePaid или WebPay
  if (cfg.mode === "link" && cfg.paymentLink) {
    window.open(cfg.paymentLink, "_blank");
    onSuccess(order); // заказ фиксируем, оплата подтверждается в кабинете
    return;
  }

  // ---------- РЕЖИМ 3: демо (по умолчанию) ----------
  // Имитация оплаты, чтобы проверить весь путь покупателя
  setTimeout(() => onSuccess(order), 900);
};

function loadScript(src, cb) {
  if (document.querySelector(`script[src="${src}"]`)) { cb(); return; }
  const s = document.createElement("script");
  s.src = src; s.onload = cb;
  document.head.appendChild(s);
}

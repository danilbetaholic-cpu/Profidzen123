#!/bin/bash
# Двойной клик по этому файлу скачает шрифты в папку /fonts рядом с сайтом.
# Шрифты Manrope и Unbounded — открытые (лицензия OFL), использовать можно свободно.
cd "$(dirname "$0")"
mkdir -p fonts
echo "Скачиваю шрифты в папку fonts ..."

# Manrope (основной текст)
curl -L -o fonts/Manrope.woff2 "https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggexSg.woff2"
# Unbounded (заголовки)
curl -L -o fonts/Unbounded.woff2 "https://fonts.gstatic.com/s/unbounded/v6/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6xjx843e5T4.woff2"

echo ""
echo "Готово. В папке fonts появились Manrope.woff2 и Unbounded.woff2."
echo "Дальше: в начале index.html замените блок <link ...googleapis...> на локальный @font-face"
echo "(инструкция — в файле ХОСТИНГ-инструкция.md, раздел «Шрифты»)."
read -p "Нажмите Enter, чтобы закрыть."

// 商品リスト
const items = [
  { name: "ハンバーガー", price: 500 },
  { name: "ポテト", price: 300 },
  { name: "コーラ", price: 200 }
];

// 合計金額
let total = 0;

// 商品ボタンを作って表示する
for (let i = 0; i < items.length; i++) {
  const button = document.createElement('button');
  button.textContent = `${items[i].name}（${items[i].price}円）`;

  button.onclick = function () {
    total += items[i].price;
    document.getElementById('total').textContent = total;

    const listItem = document.createElement('li');
    listItem.textContent = items[i].name;
    document.getElementById('orderList').appendChild(listItem);

    updateTaxIncluded(); // 税込み表示も更新！
  };

  document.getElementById('menu').appendChild(button);
}

// 税込み価格の計算・表示
function updateTaxIncluded() {
  const taxRate = parseFloat(document.querySelector('input[name="tax-rate"]:checked').value);
  const taxIncluded = Math.floor(total * (1 + taxRate));
  document.getElementById('tax-included').textContent = taxIncluded;
}

// リセット処理
function reset() {
  total = 0;
  document.getElementById('total').textContent = total;
  document.getElementById('orderList').innerHTML = '';
  updateTaxIncluded(); // 税込みもリセット
}

// 税率が変わったときに再計算
const taxRadios = document.querySelectorAll('input[name="tax-rate"]');
taxRadios.forEach(radio => {
  radio.addEventListener('change', updateTaxIncluded);
});

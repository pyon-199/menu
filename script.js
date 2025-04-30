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
    // 金額を加算
    total += items[i].price;
    document.getElementById('total').textContent = total;

    // 商品名を注文リストに追加
    const listItem = document.createElement('li');
    listItem.textContent = items[i].name;
    document.getElementById('orderList').appendChild(listItem);
  };

  document.getElementById('menu').appendChild(button);
}

// リセット関数（HTML側でonclick="reset()"される）
function reset() {
  total = 0;
  document.getElementById('total').textContent = total;

  // 注文リストも空にする
  document.getElementById('orderList').innerHTML = '';
}

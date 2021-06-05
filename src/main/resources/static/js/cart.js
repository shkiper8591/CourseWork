var cart = {}; //корзина

$.getJSON('js/item.json', function (data) {
    var item = data; //все товары в массиве
    //console.log(item);
    checkCart();
    //console.log(cart);
    showCart(); //вывожу товары на страницу

    function showCart() {
        var out = '';
        for (var key in cart) {
            out+='<div class="my-cart">';
            out += '<button class="delete">x</button>';
            out+='<div class="img-cart">';
            out += '<img src="'+item[key].img+'">';
            out+='</div>';
            out += item[key].name;
            out += '<button class="minus">-</button>';
            out += cart[key];
            out += '<button class="plus">+</button>';
            out += cart[key]*item[key].cost;
            out +='<br>';
            out+='</div>';
        }
        $('#my-cart').html(out);
    }
});

function checkCart() {
    //проверяю наличие корзины в localStorage;
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

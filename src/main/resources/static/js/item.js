var cart= {}; //корзина

$('document').ready(function(){
    loadGoods();
});

function loadGoods() {
    //загружаю товары на страницу
    $.getJSON('js/item.json', function (data) {
        var out = '';
        for (var key in data){
            out+='<div class="single-item">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>Цена: '+data[key]['cost']+'</p>';
            out+='<img src="'+data[key].img+'">';
            out+='<button class="add-to-cart" data-art="'+key+'">В корзину</button>';
            out+='</div>';
        }
        $('#item').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}
function addToCart() {
    //добавляем товар в корзину
    var articul = $(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
    console.log(cart);
}
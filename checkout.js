
item1 = document.getElementById('adhd');
item1.addEventListener('click', additem1);
item1.addEventListener('click', addToCart);
var cartTotal;


localStorage.setItem('item1', item1)
sitename = localStorage.getItem('item1');

localStorage.getItem('cartItems', cartTotal);



//Cart update on nav bar
if (+localStorage.getItem('cartItems') == 0)
{

}
else {
    cartTotal = +localStorage.getItem('cartItems');
    document.getElementById('cart').innerHTML = "Cart <sup> <b>" + (cartTotal);

}










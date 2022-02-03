var carts = document.querySelectorAll('#add-cart');
var products = [
    {
    name: 'Joyner Lucas - ADHD',
    tag: 'joynerlucas-adhd',
    price: 10.99,
    inCart: 0
    },
    {
    name: 'Mac Miller - Circles',
    tag: 'macmiller-circles',
    price: 9.99,
    inCart: 0
    },
    {
    name: 'Denzel Curry - Unlocked',
    tag: 'denzelcurry-unlocked',
    price: 9.99,
    inCart: 0
    },
    {
    name: 'XXXTentaction - Bad Vibes Forever',
    tag: 'xxxtentaction-badvibesforever',
    price: 10.99,
    inCart: 0
    },
    {
    name: 'Eminem - Music To Be Murdered By',
    tag: 'eminem-musictobemurderedby',
    price: 10.99,
    inCart: 0
    },
    {
    name: 'Kanye West - The Life Of Pablo',
    tag: 'kanyewest-thelifeofpablo',
    price: 6.99,
    inCart: 0
    }, 
    {
    name: 'Kendrick Lamar - To Pimp A Butterfly',
    tag: 'kendricklamar-topimpabutterfly',
    price: 6.99,
    inCart: 0
    }, 
    {
    name: 'Tyler The Creator - IGOR',
    tag: 'tylerthecreator-igor',
    price: 9.99,
    inCart: 0
    },
    {
    name: 'Hopsin - No Shame',
    tag: 'hopsin-noshame',
    price: 6.99,
    inCart: 0
    },
    {
    name: 'Jarren Benton - My Grandma\'s Basement',
    tag: 'jarrenbenton-mygrandma\'sbasement',
    price: 4.99,
    inCart: 0
    },                    
]

var pattern = {
    name:/^[a-zA-Z]{3,20}\s[a-zA-Z]{3,20}(\s[a-zA-Z]{3,20})?$/,
    address:/^\d{3,8}\s[a-zA-Z]{2,20}(\s[a-zA-Z]{3,20})?$/,
	province:/^[a-zA-Z]{5,20}(\s[a-zA-Z]{3,20})?(\s[a-zA-Z]{3,20})?$/,
    city:/^[a-zA-Z]{5,20}(\s[a-zA-Z]{3,20})?(\s[a-zA-Z]{3,20})?$/,
    postal:/^[a-zA-Z]\d[a-zA-Z]\s\d[a-zA-Z]\d$/,
    credit: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
    cvc: /^\d{3}$/,
    expiration: /^((0[1-9])|(1[0-2]))\/(\d{2})$/,
    namecard:/^[a-zA-Z]{3,20}\s[a-zA-Z]{3,20}(\s[a-zA-Z]{3,20})?$/,


}
var input = document.querySelectorAll("input");


//Check which item was added to cart
for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);

    });
}

//Update Cart when loading page
function onload (){
    var productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers >=1){
        document.getElementById('cart').innerHTML = "Cart <sup> <b>" + (productNumbers);

    }
    else {
        document.getElementById('cart').innerHTML = "Cart";


    }

}

//Add to cart   
function cartNumbers(product){
    var productNumbers = localStorage.getItem('cartNumbers'); 
    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.getElementById('cart').innerHTML = "Cart <sup> <b>" + (productNumbers +1);
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.getElementById('cart').innerHTML = "Cart <sup> <b> 1";


    }

    setItems(product);

}

function setItems (product) {
    var cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems !=null){
        if (cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    } 
    else {
    product.inCart = 1;
    cartItems = {
        [product.tag] : product
    }
}

    localStorage.setItem("productsInCart" , JSON.stringify(cartItems));

}


//Calculating total cost of products in cart
function totalCost (product){
    var cartCost = localStorage.getItem('totalCost');
    var tax;

    console.log(cartCost);
    if (cartCost != null){
        cartCost = parseFloat(cartCost);
        localStorage.setItem('totalCost', (cartCost + product.price).toFixed(2));
        localStorage.setItem('tax', ((cartCost * 1.15) + (product.price * 1.15)).toFixed(2));


    }
    else {
        localStorage.setItem("totalCost", + (product.price).toFixed(2));
        localStorage.setItem('tax', (product.price * 1.15).toFixed(2));

    }


}




function displayCart(){
    
    var cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    var productContainer = document.querySelector('.products');
    var cartCost = localStorage.getItem('totalCost');
    var tax = localStorage.getItem('tax');




    

    if (cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <img class="image" src="./Assets/${item.tag}.png">
            <div class="product">
            <span>${item.name}</span>
            </div>
            <div class="price">
            ${item.price}$
            </div>
            <div class="quantity">
            ${item.inCart} 
            </div>
            <div class="totalPrice">
            ${item.inCart * item.price}$
            </div>
            <button class="close">X</button>
            `;

                
        });

    //making sure numbers can't go below 0
    if (tax <=0){
        localStorage.setItem('tax', 0.);
    }
     if (cartCost <=0){
        localStorage.setItem('cartCost', 0);
        
    }
    else {
        productContainer.innerHTML += `
        <div class="totalText">
        <h4 class="totalText">
        Total:
        </h4>
        </div>
        <div class="basket-total">
        <h4 class="totalText">
        ${cartCost}$
        </h4>
        </div>
        <h4>
        Total with tax:
        </h4>
        <h4>
        ${tax}$
        </h4>
        <form>
        <input onclick="ValidateFinal()" id="buy" type="submit" value="Buy now">
        <form>
        
        
        `;
    }
    }
    deleteButton();


}

function deleteButton (){
    var deleteButton = document.querySelectorAll('.close');
    var productName;
    var productNumbers = localStorage.getItem('cartNumbers');
    var cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    var cartCost = localStorage.getItem('totalCost');
    var tax = localStorage.getItem('tax');


    for (let i =0; i < deleteButton.length; i++){
        deleteButton[i].addEventListener('click', () =>{
            productName = deleteButton[i].parentElement.getElementsByTagName('span');
            productName = productName[i].textContent.toLowerCase().replace(/ /g, '');
            localStorage.setItem('cartNumbers', productNumbers - cartItems [productName].inCart);
            localStorage.setItem('totalCost', (cartCost -(cartItems[productName].price) * cartItems[productName].inCart).toFixed(2))
            localStorage.setItem('tax', (tax -(cartItems[productName].price * 1.15) * cartItems[productName].inCart).toFixed(2))
            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
            onload();
            
        })
    }

}

input.forEach((input)=>{
	input.addEventListener("keyup",(e)=>{
		Validate(e.target, pattern[e.target.attributes.name.value]);
	})
})

function Validate(field, regex){
    console.log(regex);
    console.log(field.value);

    if(regex.test(field.value)){
		field.className = "valid";
	}else{
		field.className = "invalid";
	}
}


function ValidateFinal(){
    var productNumbers = localStorage.getItem('cartNumbers');
    var cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    var cartCost = localStorage.getItem('totalCost');
    var tax = localStorage.getItem('tax');




    if(pattern.name.test(input[0].value) && pattern.address.test(input[1].value) && pattern.province.test(input[2].value)
     && pattern.city.test(input[3].value) && pattern.postal.test(input[4].value) && pattern.credit.test(input[5].value) &&
     pattern.cvc.test(input[6].value) && pattern.expiration.test(input[7].value) && pattern.namecard.test(input[8].value)){
        alert("Order Placed!");
        localStorage.removeItem("cartNumbers");
        localStorage.removeItem("productsInCart");
        localStorage.removeItem("totalCost");
        localStorage.removeItem("tax");
	}else{
        event.preventDefault();
        alert("Invaild payment information.");

	}



}







onload();
displayCart();





let cartcontainer = document.querySelector(".cart");

let cartarray = JSON.parse(localStorage.getItem("cartitems"));
let pricecontainer = document.querySelector(".totalpricecontainer");
let pricesum = 0;
let oldpricesum=0;
 let n=0;
 let discount=0;
 
cartcontainer.addEventListener("click",(e)=>{
    location.reload()   
    switch (e.target.innerText) {
        case "Remove":
            cartarray = cartarray.filter(({id}) => id !== e.target.dataset.id);  
            localStorage.setItem("cartitems",JSON.stringify(cartarray))      
            break;
    
        case "Add":
            
            cartarray = cartarray.map((cartarray) => cartarray.id === e.target.dataset.id ? {...cartarray,quantity:Number(cartarray.quantity+1)}:{...cartarray,quantity:Number(cartarray.quantity+0)} )
            localStorage.setItem("cartitems",JSON.stringify(cartarray))
            break;
        case "Delete":
            cartarray = cartarray.map((cartarray) => cartarray.id === e.target.dataset.id ? cartarray.quantity ===1 ? {...cartarray,quantity:Number(cartarray.quantity)}:{...cartarray,quantity:Number(cartarray.quantity-1)}:{...cartarray,quantity:Number(cartarray.quantity)} )
            localStorage.setItem("cartitems",JSON.stringify(cartarray))
            break;

    }
    
    
    
   
})
for(let product of cartarray){
    
    // Main Container 
    let container2 = document.createElement("div");
    container2.classList.add("container2-resize");
    // Image Container 
    let imageconatiner = document.createElement("img");
    imageconatiner.classList.add("image-resize");
    
    imageconatiner.setAttribute("src",product.image);
    // Product Desciption ;
    let productdescription = document.createElement("div");
    productdescription.classList.add("product-description");

    // Product Price, Product Name, Product Description;

    let productname = document.createElement("span");
    productname.innerText = product.name;
    productname.classList.add("product-name");
     
    let productdetails = document.createElement("span");
    productdetails.classList.add("product-details")
    productdetails.innerText = product.description;
    
    let productprice = document.createElement("span");
    
    productprice.innerText = `Price: ${product.price} Rs /only`;
    productprice.classList.add("product-price");

    let oldpriceanddiscount = document.createElement("div");
    oldpriceanddiscount.classList.add("style");
    
    let oldprice = document.createElement("span");
    oldprice.innerText = `${product.oldprice} Rs`;
    oldprice.classList.add("old-price");

    let discountprice = document.createElement("span");
    discountprice.innerText = `${product.discount} Off`;
    discountprice.classList.add("discount-price");
    
    oldpriceanddiscount.appendChild(oldprice)
    oldpriceanddiscount.appendChild(discountprice)

    // Remve Button ;
    
    let buybutton = document.createElement("button");
    buybutton.classList.add("buy-button");
    let cart = document.createElement("span");

    
    cart.classList.add("material-symbols-outlined")
    
    cart.innerText = "shopping_cart";
    buybutton.appendChild(cart);
    let buttontext = document.createElement("span");
    buttontext.innerText ="Remove";
    buttontext.setAttribute("data-id",product.id)
    buttontext.classList.add("button-text")
    buybutton.appendChild(buttontext)
    // Product count ;

    let countcontainer = document.createElement("div");
    countcontainer.classList.add("countcontainer");
    let addbtn = document.createElement("button")
    addbtn.classList.add("add");
    addbtn.setAttribute("data-id",product.id)
    addbtn.setAttribute("data-quantity",product.quantity)
    addbtn.innerText = "Add"
    let deletebtn = document.createElement("button")
    deletebtn.setAttribute("data-id",product.id)
    deletebtn.classList.add("add");
    deletebtn.innerText = "Delete"
    countcontainer.appendChild(addbtn);
    countcontainer.appendChild(deletebtn);
    // Quantity Container;
    let quantitycontainer = document.createElement("span");
    quantitycontainer.classList.add("quantity");
    quantitycontainer.innerText = `Quantity: ${product.quantity} `;
    
    
    // Append Childs Into Parent Container
     productdescription.appendChild(productname);
     productdescription.appendChild(productdetails);
     productdescription.appendChild(productprice);
     productdescription.appendChild(oldpriceanddiscount);
     productdescription.appendChild(quantitycontainer);
     productdescription.appendChild(buybutton);
     
    container2.appendChild(imageconatiner);

    container2.appendChild(productdescription);
    container2.appendChild(countcontainer)
    cartcontainer.appendChild(container2);
    n++

    // name and price container 
    pricesum=pricesum  +  Number(product.price*product.quantity);
    oldpricesum+=Number(product.oldprice*product.quantity);
    console.log(oldpricesum)
    discount = 100-((pricesum/oldpricesum)*100);
    console.log(discount.toLocaleString('en',0 ))
    let nameprice = document.createElement("div");
    nameprice.classList.add("Nameprice")
    let name = document.createElement("span");
    name.innerText = `${n}.. Name: ${product.name}`
    let price = document.createElement("span");
    price.classList.add("price");
    price.innerText = `Price: ${product.price*product.quantity}`
    // dicount , totalprice and delivery cjarges container;
    var chargescontainer = document.createElement("div");

    chargescontainer.classList.add("chargescontainer");
    const discountcontainer  = document.createElement("span");
    discountcontainer.innerText = `Total Discount: ${discount.toLocaleString('en',0 )} %`;
    discountcontainer.classList.add("discount");
    const totalprice = document.createElement("span");
    totalprice.innerText = pricesum < 2500 ?`Total Price: ${pricesum+50} Rs`:`Total Price: ${pricesum} Rs `;
    totalprice.classList.add("totalprice");
    // Delivery Charges ;
    const Delivery = document.createElement("span");
    Delivery.classList.add("charges");
    Delivery.innerText = pricesum < 2500 ? `Delivery Charges: 50`: "Delivery Charges: 0";
    


    // Append childs;
    nameprice.appendChild(name)
    nameprice.appendChild(price);
    chargescontainer.appendChild(discountcontainer)
    chargescontainer.appendChild(Delivery)
    chargescontainer.appendChild(totalprice)
    
    pricecontainer.appendChild(nameprice)
    
    
        
}
pricecontainer.appendChild(chargescontainer)



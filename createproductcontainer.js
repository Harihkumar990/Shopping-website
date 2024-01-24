
import { iscartsameproduct } from "./findproductcarts.js";
export const createprodunctcontainer = (products,parentcontainer,type) =>{
    for(let product of products){
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
        
        productprice.innerText = `Price: ${product.price} /only`;
        productprice.classList.add("product-price");
    
        let oldpriceanddiscount = document.createElement("div");
        oldpriceanddiscount.classList.add("style");
        
        let oldprice = document.createElement("span");
        oldprice.innerText = product.oldprice;
        oldprice.classList.add("old-price");
    
        let discountprice = document.createElement("span");
        discountprice.innerText = `${product.discount} Off`;
        discountprice.classList.add("discount-price");
        
        oldpriceanddiscount.appendChild(oldprice)
        oldpriceanddiscount.appendChild(discountprice)
    
        // Buy Button ;
    
       
        let buybutton = document.createElement("button");
        buybutton.classList.add("buy-button");
        let cart = document.createElement("span");
        
        cart.classList.add("material-symbols-outlined")
        
        cart.innerText = "shopping_cart";
        buybutton.appendChild(cart);
        let buttontext = document.createElement("span");
        const productcart = iscartsameproduct(JSON.parse(localStorage.getItem("cartitems")), product.id) 
        buttontext.innerText = type === "cart" ? "Remove" : type==="products" && productcart ? "Go To Cart":"Add To Cart";
        buttontext.setAttribute("data-id",product.id)
        buttontext.classList.add("button-text")
        buybutton.appendChild(buttontext)
        
        
        
        
        // Append Childs Into Parent Container
         productdescription.appendChild(productname);
         productdescription.appendChild(productdetails);
         productdescription.appendChild(productprice);
         productdescription.appendChild(oldpriceanddiscount);
         productdescription.appendChild(buybutton);
        container2.appendChild(imageconatiner);
    
        container2.appendChild(productdescription);
        parentcontainer.appendChild(container2);
        
        
    }
}
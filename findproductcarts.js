export const iscartsameproduct = (cart, productid)=>{
    const productcart = cart && cart.length > 0 && cart.some(({id}) => id === productid )
    return productcart
}
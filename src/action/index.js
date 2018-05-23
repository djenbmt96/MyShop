import type from '../Enum';

export const addcart=(product,number)=>{

    return{
        type:type.ADD_CART,
        product:product,
        number:number
    }
}
export const removecart=(id)=>{
    return{
        type:type.REMOVE_CART,
        idProduct:id
    }
}
export const initCart=(cart)=>{
    return{
        type:type.INIT_CART,
        cart:cart
    }
}


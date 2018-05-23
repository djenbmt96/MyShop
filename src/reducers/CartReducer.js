import type from '../Enum';
import saveCart from '../api/saveCart';
import getCart from '../api/getCart';
const cart = (state = { cart: [] }, action) => {
    switch (action.type) {
        case type.ADD_CART: {
            const newCart=state.cart.concat(action.product);
            saveCart(newCart);
            return {
                cart: newCart
            }
        }
        case type.REMOVE_CART: {
            let i = 0;
            state.cart.forEach(element => {
                if (element.id == action.idProduct)
                    return {
                        ...state,
                        cart: state.cart.splice(i, 1)
                    }
                else i++;
            });
        }
        case type.INIT_CART:{
            return {
                cart:action.cart
            }
        }

        default: return state
    }
}

export default cart;
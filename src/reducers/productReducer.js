import type from '../Enum';

const products = (state=[], action) => {
    switch (action.type) {
        case type.SAVE:
            return Object.assign({}, state, {
                products: action.products
            })
        default: return state
    }
}

export default products;
import * as types from "../actions/actionType";

const initialState = {
   product: [{
       id: '01',
       name: 'product name'
   }]
};

const productReducer = function (state = initialState, action) {
    const productList = state.product;
    switch (action.type) {
        case types.ADD:
            productList.push(action.item);
            return Object.assign({}, state, {product: productList});
        case types.DELETE:
            const newState = productList.filter(item => item.id !== action.id);
            return Object.assign({}, state, {product: newState});
    }
    return state;
};

export default productReducer;
import * as types from "./actionType";

export function listProduct(item) {
    return {
        type: types.LIST,
        item
    }
}
export function addProduct(item) {
    return {
        type: types.ADD,
        item
    }
}
export function deleteProduct(id) {
    return {
        type: types.DELETE,
        id
    }
}
export function modifyProduct(id) {
    return {
        type: types.MODIFY,
        id
    }
}
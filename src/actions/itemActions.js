import { ADD_ITEM, REMOVE_ITEM } from "../../src/actions/actionsTypes";

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});

export const removeItem = (index) => ({
    type: REMOVE_ITEM,
    payload: index,
});

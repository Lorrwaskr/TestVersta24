import { actionTypes } from "./actions";

const initialState = {
    ordersList: [],
    order: {},
    isModalOpen: false,
    modalMessage: ""
};

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ORDERS_LIST:
            const newOrdersList = {
                ...state,
                ordersList: action.payload
            };
            localStorage.setItem('ordersList', JSON.stringify(newOrdersList.ordersList))
            return newOrdersList;

        case actionTypes.SET_ORDER:
            const newOrder = {
                ...state,
                order: action.payload
            };
            localStorage.setItem('order', JSON.stringify(newOrder.order))
            return newOrder;
        
        case actionTypes.TOGGLE_MODAL:
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            };

        case actionTypes.SET_MODAL_MESSAGE:
            return {
                ...state,
                modalMessage: action.payload
            }

        default:
            return state
    }
};

export default ordersReducer;
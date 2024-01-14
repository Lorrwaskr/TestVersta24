export const actionTypes = {
    SET_ORDERS_LIST: 'SET_ORDERS_LIST',
    SET_ORDER: 'SET_ORDER',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    SET_MODAL_MESSAGE: 'SET_MODAL_MESSAGE'
};

export const actionCreators = {
    setOrdersList: (newList) => ({type: actionTypes.SET_ORDERS_LIST, payload: newList}),
    setOrder: (newOrder) => ({type: actionTypes.SET_ORDER, payload: newOrder}),
    toggleModal: () => ({type: actionTypes.TOGGLE_MODAL}),
    setModalMessage: (message) => ({type: actionTypes.SET_MODAL_MESSAGE, payload: message}),
};
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.find((item) => item._id === action.product._id);
            if (existingItem) {
                return state.map((item) =>
                    item._id === action.product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...state, { ...action.product, quantity: 1 }];
            }

        case 'REMOVE_FROM_CART':
            const itemToRemove = state.find((item) => item._id === action.id);
            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    return state.map((item) =>
                        item._id === action.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                } else {
                    return state.filter(item => item._id !== action.id)
                }
            }

        default:
            return state;

    }
}

export default cartReducer;
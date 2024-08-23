const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
}

const reducer = (state = initialState, action) => {  
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: [],
                loading: true,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const existItem = state.items.find(item => item.id === id)
            if (existItem) {
                return {
                    ...state,
                    items: state.items.map(i => 
                        i.id === id ? {
                            ...i,
                            count: i.count + 1,
                            price: item.price * (i.count + 1)
                        } : i
                    )
                };
            }
            const newItem = {
                id: item.id,
                title: item.title,
                url: item.url,
                category: item.category,
                count: 1,
                price: item.price,
                
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]

            }
        case 'ITEM_DELETE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            }
        default: 
            return state;
    }

}

export default reducer;

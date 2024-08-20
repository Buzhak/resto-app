const initialState = {
    menu: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload
            };
        default: 
            return state;
    }

}

export default reducer;

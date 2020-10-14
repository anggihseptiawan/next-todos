const intialState = {
	data: null,
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "GET_TODO":
            return state;
        default:
            return state;
    }
	return state;
};

export default reducer;

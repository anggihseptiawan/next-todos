const intialState = {
	todos: null,
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case "GET_TODOS":
			return {
				...state,
				todos: action.value,
			};
		default:
			return state;
	}
};

export default reducer;

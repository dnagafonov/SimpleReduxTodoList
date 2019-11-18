const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                    completed: false
                }
            ];
        case "TOGGLE_TODO":
            return state.map(el => el.id === action.id ? {...el, completed: !el.completed} : el);
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id ? todo : null);
        default:
            return state;
    }
};
export default todos;
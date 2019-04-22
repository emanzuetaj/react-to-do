export default (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            // TODO: add to todos, then return
            return [...state, {
                id: action.todoItem.id,
                name: action.todoItem.name,
                completed: false
            }]
        case 'TOGGLE_COMPLETE':
            return state.map(todo => {
                if (todo.id !== action.itemId) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        case 'REMOVE':
            const newState = state.filter((value) => {
                return value.id !== action.itemId;
            });
            return newState;
        default:
            return state;
    }
}
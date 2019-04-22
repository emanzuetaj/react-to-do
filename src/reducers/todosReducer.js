import undoable, { distinctState } from 'redux-undo'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
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
            const newState = state.filter((todo) => {
                return todo.id !== action.itemId;
            });
            return newState;
        default:
            return state;
    }
}

const undoableTodos = undoable(todos, {
    filter: distinctState()
})

export default undoableTodos
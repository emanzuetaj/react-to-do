export const add = (todoItem) => dispatch => {
    dispatch({
        type: 'ADD',
        todoItem: todoItem
    })
}
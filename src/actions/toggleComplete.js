export const toggleComplete = (id) => dispatch => {
    dispatch({
        type: 'TOGGLE_COMPLETE',
        itemId: id
    })
}
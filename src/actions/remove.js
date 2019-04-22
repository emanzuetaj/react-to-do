export const remove = (id) => dispatch => {
    dispatch({
        type: 'REMOVE',
        itemId: id
    })
}
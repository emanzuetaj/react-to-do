export const add = () => dispatch => {
    dispatch({
        type: 'ADD',
        data: 'added action triggered'
    })
}
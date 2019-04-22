export const setFilter = (setting) => dispatch => {
    dispatch({
        type: 'SET_FILTER',
        setting: setting
    })
}
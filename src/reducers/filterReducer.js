export default (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.setting;
        default:
            return state;
    }
}
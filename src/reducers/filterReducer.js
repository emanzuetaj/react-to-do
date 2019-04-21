export default (state ={}, action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            // TODO: return all
            break;
        case 'SHOW_COMPLETE':
            // TODO: return complete
            break;
        case 'SHOW_INCOMPLETE':
            // TODO: return incomplete
            break;
        default:
            return state;
    }
}
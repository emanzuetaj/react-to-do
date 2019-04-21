export default (state ={}, action) => {
    switch (action.type) {
        case 'ADD':
            // TODO: add to todos, then return
            return {
                result: action.data
            };
        case 'TOGGLE_COMPLETE':
            // TODO: toggle, then return
            break;
        case 'REMOVE':
            // TODO: delete todo, then return
            break;
        default:
            return state;
    }
}
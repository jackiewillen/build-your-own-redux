import {UPDATE_THEME} from './actions';

let initState = {
    color: 'red'
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_THEME:
            {
                let { color } = action;
                return {
                    ...state,
                    color
                };
            }
        default:
            return state;
    }
}

export default reducer;
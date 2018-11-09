// author: jackieyin(殷荣桧)
// time : 2018.11.8
// action ----> dispatch ----> store -----> view
//                 ^                          |
//                 |                          |
//                 |----------action----------|
// (1)首先来实现reducer，相当于dispatch的雏形
// 目标： state ---->reducer -----> newState
// 对于备忘录可能出现的action的集合
const CREATE_NOTE = "CREATE_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";

var reducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_NOTE: {
            let currentId = state.nextNoteId;
            return {
                nextNoteId: currentId + 1,
                notes: {
                    ...state.notes,
                    [currentId]: action.content
                },
            };
        }
        case UPDATE_NOTE: {
            let {id, content} = action;
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id]: content
                }
            };
        }
        default:
            return state;
    }
}

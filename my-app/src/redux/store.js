// 为什么需要store?
// (1)之前的几个commit提交只执行了如下环节，并没有完成flux模式的闭环
// 也就是在state更新后不能够及时更新view(index.html)中的信息
// action ----> reducer ----> state        view
//                 ^                          |
//                 |                          |
//                 |----------action----------|
// (2)之前只有initialState,表示当前我自己的备忘录，但是突然我们需要新建
// 100个人的备忘录，就要100个这样的initialState。然后你会对不同的人
// 进行不同的增删改查，通过user1_updateState,user5_deleteState....来
// 存储不同的人的备忘录修改过之后的状态，你会发现，实在太麻烦了,比如
// 这个时候56个人问你，我现在备忘录的状态是什么，你还能找的
// 到吗？所有需要用 一个个不同的store来保存不同人的状态。随时获取状态。
// (3)对不同的人记录时，没法通知到不同的人。
function createStore(reducer) {
    let state = undefined;
    const subscribers = [];
    let store = {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action);
            subscribers.forEach(handler => handler());
        },
        subscribe: (handler) => {
            // handler就要比如备忘录有更新就发送通知到对应的人之类的
            subscribers.push(handler);
            return () => {
                let index = subscribers.indexOf(handler);
                if (index >= 0) {
                    // 防止搜索不到index为-1时，把subscribers最后一个删除了
                    subscribers.splice(0, index);
                }
            }
        }
    }
    store.dispatch({type: 'INIT'}); // 初始化
    return store;
}
export default createStore;
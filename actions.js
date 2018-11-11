// 原子操作
const CREATE_NOTE = "CREATE_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";

// 添加一条备忘录
const create_action = {
    type: CREATE_NOTE,
    content: '明天下午要开会'
};
// 更新一条备忘录
const update_action = {
    type: UPDATE_NOTE,
    id: 1,
    content: '好像记错了，是明天上午要开会'
};
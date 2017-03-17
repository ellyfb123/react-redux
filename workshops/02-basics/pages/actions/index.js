export const addTodo = (text) => ({ type: 'ADD_TODO', text });
export const deleteTodo = (index) => ({ type: 'DELETE_TODO', index});
export const changeTodo = (index, text) => ({ type: 'CHANGE_TODO', index, text});
export const saveTodo = () => ({ type: 'SAVE_TODO' });
const initialState = ['add todo item','delete todo item','change todo item'];
const storage = localStorage.getItem('todos');
const initialTodos = storage !== null ? JSON.parse(storage) : initialState;

export default function todos(state=initialState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [action.text, ...state];
		case 'DELETE_TODO':
			return state.filter((todo) => {return state.indexOf(todo) !== action.index});
		case 'CHANGE_TODO':
			return state.map(todo => {
		    	     if (state.indexOf(todo) !== action.index) {
		    		   return todo;
		    	     }
		    	     return action.text;
		    	    });
		case 'SAVE_TODO':
			localStorage.setItem('todos', JSON.stringify(state));
      		return state;
		default:
			return state;
	}
}
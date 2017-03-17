import AddNewTodo from "./addnewtodo"
import TodoList from "./todolist"

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      todos: []
	    };
	}

	addTodo(text) {
    	this.setState({ todos: [text,...this.state.todos] });
    }

    deleteTodo(index) {
    	this.setState({ todos: this.state.todos.filter((todo) => {return this.state.todos.indexOf(todo) !== index})});
    }

    changeTodo(index, text) {
    	this.setState({ todos: this.state.todos.map(todo => {
    		if (this.state.todos.indexOf(todo) !== index) {
    		  return todo;
    	    }
    	    return text;
    	 })})
    }

	render() {
		const {todos} = this.state;
		return (
			<div>
				<h1>todo list</h1>
  				<AddNewTodo addTodo={this.addTodo.bind(this)} />
  				<TodoList todos={todos} deleteTodo={this.deleteTodo.bind(this)} changeTodo={this.changeTodo.bind(this)}/>
			</div>
		)
	}
}

export default App;


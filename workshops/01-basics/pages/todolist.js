class TodoList extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      text: '',
	      index: ''
	    };
  	}

	handleNewTodoKeyPress(e) {
	    if (e.key === 'Enter') {
	      const text = e.target.value;
	      if (text.length !== 0) {
	      	const index = this.state.index;
	      	this.props.changeTodo(index, text);
	        this.setState({ text: '', index: '' });
	      }
	    }
	}

	handleNewTodoChange(e) {
	    this.setState({ text: e.target.value });
	}

	editTodo(todoIndex) {
		this.setState({ index: todoIndex });
		console.log(this);
	}

	render() {
		const {todos, deleteTodo} = this.props;
		return (
			<div>
			    {this.state.index !== '' ? (<input 
				    value={this.state.text}
					onChange={this.handleNewTodoChange.bind(this)}
					onKeyPress={this.handleNewTodoKeyPress.bind(this)}
				    />) : ''
			    }
				
				<ul className="todo-list">
	            {
	            	todos.map((todo, index) => 
	            		<li key={index}>{todo} 
	            			<button onClick={()=>deleteTodo(index)}>delete</button>
	            			<button onClick={()=>this.editTodo(index)}>change</button>
	            		</li>
	            	)
	            }
	            </ul>
	        </div>
		)
	}
}

export default TodoList;
class AddNewTodo extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      text: ''
	    };
  	}

  handleNewTodoKeyPress(e) {
    if (e.key === 'Enter') {
      const text = e.target.value;
      if (text.length !== 0) {
      	console.log(text);
      	this.props.addTodo(text);
        this.setState({ text: '' });
      }
    }
  }

  handleNewTodoChange(e) {
    this.setState({ text: e.target.value });
  }
	render() {
		return (
			<input 
				className="new-todo"
				placeholder="Add New Todo"
				autoFocus="true"
				value={this.state.text}
				onChange={this.handleNewTodoChange.bind(this)}
				onKeyPress={this.handleNewTodoKeyPress.bind(this)}
			/>
		)
	}
}

export default AddNewTodo;


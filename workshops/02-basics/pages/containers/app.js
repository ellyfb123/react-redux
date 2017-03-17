import AddNewTodo from "../components/addnewtodo"
import TodoList from "../components/todolist"
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      todos: this.props.todos
	    };
	}

	componentWillReceiveProps(nextProps) {
	    this.setState({
	      todos: nextProps.todos
	    })
  	}

	render() {
		const { todos } = this.state;
		const { actions } = this.props;
		return (
			<div>
				<h1>todo list</h1>
  				<AddNewTodo addTodo={actions.addTodo} />
  				<TodoList todos={todos} deleteTodo={actions.deleteTodo} changeTodo={actions.changeTodo}/>
  				<button onClick={()=>actions.saveTodo()}>Save it</button>
			</div>
		)
	}
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


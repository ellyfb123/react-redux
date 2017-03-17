import App from "./containers/app";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

export default props => (
  <Provider store={store}>
  	<header className="header">
  		<App />
  	</header>
  </Provider>
)



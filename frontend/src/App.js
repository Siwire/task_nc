import './App.css';
import configereStore from './redux/configureStore';
import { Provider } from 'react-redux';
import NoteContainer from './containers/NoteContainer'

const store = configereStore(/* provide initial state if any */)


function App() {
  return (
    <div className="App">
       <Provider store={store}>
        <NoteContainer/>
      </Provider>
    </div>
  );
}

export default App;

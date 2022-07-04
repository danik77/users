import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./app/store";

import UserList from "./components/Users/UserList";
import UserAdd from "./components/Users/UserAdd";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserAdd />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;

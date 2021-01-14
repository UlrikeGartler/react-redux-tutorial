import logo from "./logo.svg";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact strict component={CakeContainer} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

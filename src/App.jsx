import { Provider } from "react-redux";
import QuoteBox from "./Components/QuoteBox";
import store from "./Store/store";

function App() {
  return (
    <div id="main" className="myani">
      <Provider store={store}>
        <QuoteBox />
      </Provider>
    </div>
  );
}

export default App;

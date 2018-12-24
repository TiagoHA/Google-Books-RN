import * as React from "react";
import { Provider } from "react-redux";
import Routes from "src/routes";
import "src/config/ReactotronConfig";
import store from "src/store";

/* const AppStore = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
); */

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;

import { Provider } from "react-redux";
import "./App.css";
import UserContainer from "./components/UserContainer";

// import NewCakeContainer from "./components/NewCakeContainer";
// import NewHooksAgeContainer from "./components/HooksNewAgeContainer";
// import ItemContainer from "./components/ItemContainer";

// import AgeContainer from "./components/AgeContainer";
// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import NewAgeContainer from "./components/NewHooksAgeContainer";

import store from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <CakeContainer />
        <HooksCakeContainer />
        <AgeContainer /> */}
        {/* <NewCakeContainer /> */}
        {/* <NewHooksAgeContainer /> */}
        {/* <ItemContainer c/>
        <ItemContainer /> */}
       <UserContainer />
      </Provider>
    </>
  );
}

export default App;

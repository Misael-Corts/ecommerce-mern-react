import { Route } from "react-router-dom";
import { HeaderApp } from "./components/HeaderApp";
import { Home } from "./views/Home";
import { ProductView } from "./views/ProductView";
import { PurchaseView } from "./views/PurchaseView";

function App() {
  return (
    <>
      <HeaderApp />
      <switch>
        <Route path={"/product/:id"} exact component={ProductView} />
        <Route path={"/purchase"} exact component={PurchaseView} />
        <Route path={"/"} exact component={Home} />
      </switch>
    </>
  );
}

export default App;

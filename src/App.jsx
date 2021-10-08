import { Switch, Route } from "react-router";
import CreateView from "./pages/create-view";
import EditView from "./pages/edit-view";
import MainView from "./pages/main-view";
import CartView from "./pages/cart-view";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <MainView />
        </Route>
        <Route exact path="/create">
          <CreateView />
        </Route>
        <Route exact path="/edit/:id">
          <EditView />
        </Route>
        <Route exact path="/cart">
          <CartView />
        </Route>
      </Switch>
    </main>
  )
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from './component/Products';
import Cart from './component/Cart';
import Home from './App.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/Cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
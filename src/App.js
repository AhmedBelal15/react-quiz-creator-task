import { Route, Switch } from "react-router-dom";
import AddQuiz from "./pages/AddQuiz/AddQuiz";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/addquiz' component={AddQuiz} />
      <Route exact path='/editquiz/:id' render={()=> <h1>Not Implemented</h1>}  />
      <Route exact path='/' component={Home} />
      <Route render={()=><h1>404 Not Found </h1>} />
      </Switch>
    </div>
  );
}

export default App;

import AddQuiz from "./pages/AddQuiz/AddQuiz";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
      <Route path='/addquiz' component={AddQuiz} />
      <Route render={()=><h1>404 Not Found </h1>} />
      </Switch>
    </div>
  );
}

export default App;

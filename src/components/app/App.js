import './App.css';
import {Route, Switch} from "react-router-dom";
import Carousel from "../slider";
import Header from "../header";
import {Catalog, About} from "../pages";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          {/* <Route path="/" component={MainPage} exact/> */}
          <Route path="/catalog" component={Catalog}/>
          <Route path="/about" component={About}/>
      </Switch>
      
      <Carousel/>
    </div>
    
  );
}

export default App;

import './App.css';
import {Route, Switch} from "react-router-dom";
import Carousel from "../slider";
import Header from "../header";
import MainSection from "../main-section";
import {Catalog, About} from "../pages";

function App() {
  return (
    <div>
      <Header/>
      <MainSection/>
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

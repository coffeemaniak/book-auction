import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import Carousel from "../slider";
import Header from "../header";
import MainSection from "../main-section";
import {Catalog, About, Login,  Join} from "../pages";
import BookList from "../book-list";


function App  () {
  return (
    <div>
      <Header/>
      <MainSection/>
      <Carousel/>
      <BookList/>
      <Switch>
          {/* <Route path="/" component={MainPage} exact/> */}
          <Route path="/catalog" component={Catalog}/>
          <Route path="/about" component={About}/>
      </Switch>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/join" component={Join}/>
      </Switch>
    </div>
    
  );
}

export default App;

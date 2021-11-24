import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import {Provider} from "react-redux";
import store from './store';
import Details from './components/Details';


function App() {
  console.log(store);
  return (
    <Provider store={store}> 
    <Router>
       <Nav />
      
    
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cart" exact element={<Cart />} />
      <Route path="/details/:id" exact element={<Details />} />
      </Routes>

     
    </Router>
    </Provider>
  );
}

export default App;

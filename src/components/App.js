import { BrowserRouter as Router } from "react-router-dom";
import Dieuhuong from "../router/Dieuhuong";
import "./../css/App.css";
import Footer from "./Footer";
import Nav from "./Nav";


function App() {
  return (
    <div>
      <Router>
        <Nav />
        {/* <Home/> */}
        {/* <Tintuc/> */}
        {/* <New_detail/> */}
        
        <Dieuhuong />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

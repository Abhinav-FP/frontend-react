import "./App.css";
//import Classic from "./Pages/Classic";
import Footer from "./Pages/Footer";
//import ProductDetails from "./Pages/products/Page";
import Head from "./Pages/home/Head";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productdetials from "./Pages/products/Productdetials";
import SignIn from "./Pages/User/SignIn";
import Register from "./Pages/User/Register";
import ErrorHandler from "./Handler/ErrorHandler";
import Error404 from "./Pages/Error/Error404";
import Profile from "./Pages/home/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <div className="App">
        <UserContextProvider>
      <ErrorHandler>
        <Router>
          <Head />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path=":title" >
              <Route path=":id" element={<Productdetials />} />
              {/* A nested route! */}
              </Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ErrorHandler>
        </UserContextProvider>
    </div>
  );
}

export default App;

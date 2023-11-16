import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import Login from "./screen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubcribe;
  }, []);

  return (
    <>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route exact path="/" element={<HomeScreen />}></Route>
            </Routes>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;

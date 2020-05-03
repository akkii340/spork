import React from "react";
import Nav from "./components/Nav";
import CoverPicture from "./components/CoverPicture";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import { ContextProvider } from "./components/Context";
import { CssBaseline } from "@material-ui/core";
import Login from "./components/Login";
import Users from "./components/Users";
import Add from './components/CodingTask/Add'
import View from './components/CodingTask/View'

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ContextProvider>
        <div className="App">
          <Nav />
          <CoverPicture />
          <main>
            <Switch>
              <Route path="/users" component={Users} />
              <Route path="/login" component={Login} />
              <Route path="/add" component={Add}/>
              <Route path="/view" component={View}/>
              <Route path="/" component={Main} />
            </Switch>
          </main>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

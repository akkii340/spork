import React from "react";
import Nav from "./Nav";
import CoverPicture from "./components/CoverPicture";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import { ContextProvider } from "./components/Context";
import { CssBaseline } from "@material-ui/core";

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
              <Route path="/" component={Main} />
            </Switch>
          </main>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

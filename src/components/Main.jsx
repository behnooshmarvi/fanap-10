import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TopBar from "components/TopBar";
import Articles from "pages/Articles";
import AddArticle from "pages/AddArticle";
// import UpdateArticle from "pages/UpdateArticle";
import { PrivateRoute } from "helpers";
import ShowDetail from "pages/ShowDetail";

export default function Main() {
  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path={["/", "/articles"]} component={Articles} />
          <Route exact path="/showdetail" component={ShowDetail} />
          <PrivateRoute exact path="/add" component={AddArticle} />
          <Route component={() => <h1>Not Found</h1>} />
          {/* <Route  path="/showdetail" component={ShowDetail} /> */}
        </Switch>
      </Container>
    </>
  );
}

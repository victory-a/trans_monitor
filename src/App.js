import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FullPageSpinner } from "components/loaders.js";
import AppLayout from "Layout/AppLayout";
import routes from "routes/routesList";

function App() {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<FullPageSpinner />}>
          <Switch>
            {routes.map(({ component, ...rest }, index) => (
              <Route component={component} {...rest} key={`app-route-${index}`} />
            ))}
          </Switch>
        </Suspense>
      </AppLayout>
    </Router>
  );
}

export default App;

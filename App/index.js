import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "../redux";
import { Theme as ThemeProvider } from "./Theme";
import { ViewportProvider } from "./Viewport";
import SessionProvider from "./AccountSession";
import Header from "./Header";
import { elementId } from "../../shared";
import { Modal } from "./Modal";
import { Route } from "react-router-dom";
import { Router } from "./Router";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

const App = () => (
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider>
          <ViewportProvider>
            <SessionProvider>
              <Header />
              <main id={elementId.main}>
                <Modal />
                <Route path="*" component={Router} />
                <BackToTop />
              </main>
              <Footer />
            </SessionProvider>
          </ViewportProvider>
        </ThemeProvider>
      </ConnectedRouter>
    </ReduxProvider>
  </ErrorBoundary>
);

export default App;

// https://www.npmjs.com/package/react-redux
// https://www.npmjs.com/package/connected-react-router
// https://www.npmjs.com/package/styled-components
// https://www.npmjs.com/package/react-router-dom

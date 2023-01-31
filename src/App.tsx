import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducer";
import { BrowserRouter } from 'react-router-dom'
import { Content } from "./shared/Layout/Content";
import { Header } from "./shared/Layout/Header";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  const [ mounted, setMounted ] = React.useState(false);

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Provider store={ store }>
      { mounted && (
        <BrowserRouter>
          <Layout>
            <Header/>
            <Content/>
          </Layout>
        </BrowserRouter>
      ) }
    </Provider>
  );
}

export const App = hot(() => <AppComponent/>);

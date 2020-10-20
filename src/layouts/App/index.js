import React from "react";
import { useRoutes } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import "./index.scss";
import routes from "../../route";

const queryCache = new QueryCache();

function App() {
  const routing = useRoutes(routes);
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <main className="App">{routing}</main>
    </ReactQueryCacheProvider>
  );
}

export default App;

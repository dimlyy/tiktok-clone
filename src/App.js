import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from './routes';
import { DefaultLayout } from './Components/layouts';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;
                if (route.layout){
                  Layout = route.layout;
                }
                else if (route.layout === null){
                  Layout = null;
                }
                return (
                  <Route key={index} path={route.path} element={
                  <Layout>
                      <Page />
                  </Layout>
                }/>
                )
              })}
          </Routes>
        </div>
      </Router>
  );
}

export default App;

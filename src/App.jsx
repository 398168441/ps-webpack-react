import React, { Suspense, lazy } from "react";
import { Link, Routes, Route } from "react-router-dom";

const Home = lazy(() =>
  import(/* webpackChunkName: 'homePage' */ "./pages/Home")
);
const About = lazy(() =>
  import(/* webpackChunkName: 'aboutPage' */ "./pages/About")
);

function App() {
  return (
    <div>
      <div>App~~</div>
      <ul>
        <Link to="/home">Home</Link>
      </ul>
      <ul>
        <Link to="/about">About</Link>
      </ul>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

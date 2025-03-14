import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";

//import components lazily
const Home = lazy(() => import('./pages/Home.js')); 
const About = lazy(() => import('./pages/About.js')); 
const Articles = lazy(() => import('./pages/Articles.js')); 
const Article = lazy(() => import('./components/molecules/Article.js')); 
const Leadership = lazy(() => import('./pages/Leadership.js'));
const LeaderSet = lazy(() => import('./components/molecules/LeaderSet.js'));
const Contact = lazy(() => import('./pages/Contact.js'));
const Terms = lazy(() => import('./pages/Terms.js'));
const Privacy = lazy(() => import('./pages/Privacy.js'));
const Test = lazy(() => import('./components/Test.js'));

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Articles" element={<Article />} />
            <Route path="/Leadership" element={<LeaderSet />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Terms+&+Conditions" element={<Terms />} />
            <Route path="/Privacy+Policy" element={<Privacy />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

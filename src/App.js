import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";

//import components lazily
const Home = lazy(() => import('./pages/Home.js')); 
const About = lazy(() => import('./pages/About.js')); 
const AllArticles = lazy(() => import('./pages/AllArticles.js')); 
const Team = lazy(() => import('./pages/Team.js'));
// const Contact = lazy(() => import('./pages/Contact.js'));
const ContactUs = lazy(() => import('./components/molecules/ContactUs.js'));
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
            {/* <Route path="/Contact" element={<Contact />} /> */}
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/News" element={<AllArticles />} />
            <Route path="/Leadership" element={<Team />} />
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

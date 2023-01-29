import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div >
    <Helmet>
                <meta charSet="utf-8" />
                <title>Ricardo's Portfolio</title>
                <link rel="canonical" href="" />
                <meta name="Ricardo Portfolio" content="Nested component" />
            </Helmet>
<Navbar/>
<Home/>
<About/>
<Skills/>
<Work/>
<Contact/>
    </div>
  );
}

export default App;

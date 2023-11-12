import Main from "./components/Main.jsx";
// import Sidenav from "./components/Sidenav.jsx";
import Objective from "./components/Objective.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gray-200">
      <Main />
      {/* <Sidenav /> */}
      <Objective />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

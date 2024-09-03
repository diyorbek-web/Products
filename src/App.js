import Product from "./component/Product";
import Description from "./component/Description";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Description />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

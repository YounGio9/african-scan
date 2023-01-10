import Accueil from "./Accueil";
import Banner from "./Banner";
import Footer from "./Footer"

function App() {
  return (
    <div className="App" style={{
      width: "100%",
      height: "100%",
      padding: 0,
      margin: 0
    }}>
      <Banner />
      <Accueil />
      <Footer />
    </div>
  );
}

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Router } from "./Router";

function App() {

  return (
    <div className="bg-background">
      <Header/>
      <Router/>
      <Footer />
    </div>
  )
}

export default App

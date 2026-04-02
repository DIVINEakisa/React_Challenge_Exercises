import "./App.css";
import { Header } from "./Component/Header";
import image from "./assets/chef.png";

function App() {
  return (
    <>
      <Header img={image} name="Chef Claude" />
    </>
  );
}

export default App;

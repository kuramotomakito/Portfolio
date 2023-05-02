import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from "./component/Works/index";
import About from "./component/About/index";
import SportsFestival from "./component/SportsFestival/index";
import Enoshimabbq from "./component/Enoshimabbq/index"
import IkimonoPalette from "./component/BannerDesign/index"
import BannerDesign from "./component/BannerDesign/index"
// import header from "./assets/header";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Works />} />
        <Route path={`/About/`} element={<About />} />
        <Route path={`/SportsFestival/`} element={<SportsFestival />} />
        <Route path={`/Enoshimabbq/`} element={<Enoshimabbq />} />
        <Route path={`/IkimonoPalette/`} element={<IkimonoPalette />} />
        <Route path={`/BannerDesign/`} element={<BannerDesign />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
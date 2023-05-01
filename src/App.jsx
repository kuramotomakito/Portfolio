// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from "./component/Works/index";
import About from "./component/About/index";
import SportsFestival from "./component/SportsFestival/index";
import Enoshimabbq from "./component/Enoshimabbq/index"
import IkimonoPalette from "./component/BannerDesign/index"
import BannerDesign from "./component/BannerDesign/index"
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
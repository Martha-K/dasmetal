import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./pages/AboutUs";
import { Products } from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />}>
          {/* <Route path="cast" element={<Cart />}></Route>
          <Route path="reviews" element={<Reviews />}></Route> */}
        </Route>
        <Route path="/about-us" element={<AboutUs />}/>
      </Route>
    </Routes>
  );
}

export default App;

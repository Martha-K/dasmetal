import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./pages/AboutUs";
import { Products } from "./pages/Products";
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';

function App() {
  return (
    <>
      <ScrollToTop />
      <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />}>
            {/* <Route path="cast" element={<Cart />}></Route>
          <Route path="reviews" element={<Reviews />}></Route> */}
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
      </I18nextProvider>
    </>
  );
}

export default App;

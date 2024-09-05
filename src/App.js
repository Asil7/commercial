import "./App.css";
import Main from "./component/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./component/pages/ProductDetail";

function App() {
  return (
    <div className="bg-light">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product-detail/" element={<ProductDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

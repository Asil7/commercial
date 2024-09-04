import "./App.css";
import Main from "./component/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-light">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

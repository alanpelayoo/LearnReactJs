import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Practice from "./pages/Practice";
import ApiCalls from "./pages/ApiCalls";
import ApiCalls2 from "./pages/ApiCalls2";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/api" element={<ApiCalls />} />
        <Route path="/api-correct" element={<ApiCalls2 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

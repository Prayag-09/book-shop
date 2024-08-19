import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 p-4">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

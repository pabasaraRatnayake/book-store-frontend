import Books from "./pages/Books";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style.css"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Books/>} />
                <Route path="/add" element={<Add/>} />
                <Route path="/update/:id" element={<Edit/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

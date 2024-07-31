import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/React-Exercise/" element={<MainPage />} />
          <Route path="/React-Exercise/product/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

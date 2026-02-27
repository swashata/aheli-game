import { BrowserRouter, Route, Routes } from "react-router";
import GamePage from "@/pages/GamePage";
import HomePage from "@/pages/HomePage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:slug" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

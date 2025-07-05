import { Route, Routes } from "react-router";
import Home from "./pages/home";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>about</h1>} />
    </Routes>
  )
}
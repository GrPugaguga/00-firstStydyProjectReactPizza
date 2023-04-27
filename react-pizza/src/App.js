import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from "./header.jsx"
import NavElement from "./navElement.jsx"
import Main from "./main.jsx"
import FooterMenu from "./footerMenu.jsx"


function App() {
  return (
    <BrowserRouter >
      <Header />
      <NavElement />

      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route path="promotion" element={
          <div></div>
        } />
        <Route path="contacts" element={
          <div></div>
        } />
        <Route path="about" element={
          <div></div>
        } />
      </Routes>
      <FooterMenu />
    </BrowserRouter>

  );
}

export default App;

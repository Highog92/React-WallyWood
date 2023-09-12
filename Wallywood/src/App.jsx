import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from './Components/useContext/useContext';
import { Posters } from './Pages/Posters';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Login } from './Pages/Login';
import { MainLayout } from './Layout/MainLayout';
import { Home } from './Pages/Home';
function App() {

  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title="Home" />}>
            <Route path="/" element={<Home title="Home" />} />
            <Route path="/Posters" index element={<Posters title="Posters" />} />
            <Route path="/About" element={<About title="About" />} />
            <Route path="/Contact" element={<Contact title="Contact" />} />
            <Route path="/Login" element={<Login title="Login" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>

    </>
  )
}

export default App

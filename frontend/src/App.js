import {Routes,Route } from "react-router-dom/dist";
import Home from './pages/home';
import Inscription from "./pages/inscription";
import Dashboard from "./pages/dashboard";
import Documentation from "./pages/documentation";
import Catways from "./pages/catways";
import Cataway from "./pages/catway";
import Reservations from "./pages/reservation";
import Reservation from "./pages/reservation";


function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Inscription" element={<Inscription/>}/>
          <Route path="/Documentation" element={<Documentation/>}/>
          <Route path="/Catways" element={<Catways/>}/>
          <Route path="/Cataway" element={<Cataway/>}/>
          <Route path="/Reservations" element={<Reservations/>}/>
          <Route path="/Reservation" element={<Reservation/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

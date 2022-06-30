import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewBooking from "../pages/NewBooking";
import Babysitters from "../pages/Babysitters";
import Profile from "../pages/Profile";
import EditBookingForm from "./EditBookingForm";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
      
      <NavBar user={user} setUser={setUser} />
      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/bookings/:id/edit" element={<EditBookingForm user={user} />} />
        </Routes>

        <Routes>
          <Route path="/profile/:id/edit" element={<EditProfileForm user={user} />} />
        </Routes>

        <Routes>
          <Route path="/bookings/new" element={<NewBooking user={user} />} />
        </Routes>

        <Routes>
          <Route path="/babysitters" element={<Babysitters user={user} />} />
        </Routes>

        <Routes>
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        </Routes>

        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewBookingForm from "./NewBookingForm";
import Babysitters from "../pages/Babysitters";
import Profile from "../pages/Profile";
import EditBookingForm from "./EditBookingForm";
import EditProfileForm from "./EditProfileForm";


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

//   if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <main>
        <BrowserRouter>
      <NavBar user={user} setUser={setUser} />
        {/* <Routes>
          <Route path="/bookings/:id/edit" element={<EditBookingForm user={user} />} />
        </Routes>

        <Routes>
          <Route path="/profile/:id/edit" element={<EditProfileForm user={user} />} />
        </Routes>

        <Routes>
          <Route path="/bookings/new" element={<NewBookingForm user={user}/>} />
        </Routes> */}

        <Routes>
          <Route path="/" element={<Babysitters user={user} />} />
        </Routes>

        {/* <Routes>
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        </Routes> */}

        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
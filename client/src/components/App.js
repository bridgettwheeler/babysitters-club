import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewBooking from "../pages/NewBooking";
import Babysitters from "../pages/Babysitters";
import Profile from "../pages/Profile";
import EditBookingForm from "../pages/EditBookingForm";


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
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/bookings/:id/edit">
            <EditBookingForm user={user} />
          </Route>
          <Route path="/profile/:id/edit">
            <EditProfileForm user={user} />
          </Route>
          <Route path="/bookings/new">
            <NewBooking user={user} />
          </Route>
          <Route path="/babysitters">
            <Babysitters user={user} />
          </Route>
          <Route path="/profile">
            <Profile user={user} setUser={setUser} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
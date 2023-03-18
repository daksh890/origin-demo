import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { getData } from "./component/Data/data";
import Admin from "./component/Admin/Admin";
// import Dashboard from "./component/Dashboard/dashboard";
import Header from "./component/Header/header";
import SignIn from "./component/Signin/SignIn";
const Dashboard = React.lazy(() => import("./component/Dashboard/dashboard"));

function App() {
  const [adminlabels, setAdminLabels] = useState([
    "animal",
    "horse",
    "cat",
    "dog",
    "brown",
    "black",
    "tall",
    "short",
    "cute",
  ]);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <div className="App">
      <div className="top">
        <Header
          user={user}
          admin={admin}
          setUser={setUser}
          setAdmin={setAdmin}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={<SignIn setAdmin={setAdmin} setUser={setUser} user={user} />}
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard adminLabels={adminlabels} data={data} user={user} />
            </Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            <Admin
              setAdminLabels={setAdminLabels}
              adminLabels={adminlabels}
              user={user}
              admin={admin}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

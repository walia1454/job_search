// import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { AccountProvider } from "./context/AccountContext";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";

function App() {
  return (
    <AccountProvider>
      <div className="div">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/registration" Component={Registration} />
          <Route exact path="/dashboard" Component={Dashboard} />
          <Route exact path="/job/:id" Component={JobDetails} />
          <Route
            exact
            path="/createJob"
            element={
              <ProtectedRoute>
                <CreateJob />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AccountProvider>
  );
}

export default App;

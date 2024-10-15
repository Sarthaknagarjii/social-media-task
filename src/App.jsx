import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserForm from "./components/UserForm";
import AdminDashboard from "./components/AdminDashboard";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Social Media Task
          </Typography>
          <Button color="inherit" component={Link} to="/">
            User Form
          </Button>
          <Button color="inherit" component={Link} to="/admin">
            Admin Dashboard
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

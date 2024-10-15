import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login functionality here
    console.log("Admin logged in:", { username, password });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper
        elevation={3}
        style={{
          padding: "30px 40px",
          width: "400px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Admin Login
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Username"
            fullWidth
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            style={{ marginTop: "20px" }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminLogin;

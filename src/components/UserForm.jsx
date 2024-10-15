import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Alert,
} from "@mui/material";

const UserForm = () => {
  const [name, setName] = useState("");
  const [socialHandle, setSocialHandle] = useState("");
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("socialHandle", socialHandle);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
      setName("");
      setSocialHandle("");
      setImages([]);
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          style={{ padding: "30px", backgroundColor: "#fff" }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            User Submission Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Social Media Handle"
                  fullWidth
                  value={socialHandle}
                  onChange={(e) => setSocialHandle(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label" fullWidth>
                  Upload Images
                  <input
                    type="file"
                    hidden
                    multiple
                    onChange={handleFileChange}
                    required
                  />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          {message && (
            <Box mt={2}>
              <Alert severity="info">{message}</Alert>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default UserForm;

import axios from 'axios';
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    Alert,
  } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { paperStyle } from "./AuthStyles";
function ConfirmPage() {
    const [code, setCode] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate()
    const handleSubmit = () => {
        let email = JSON.parse(localStorage.getItem("userEmail"))
        console.log(email);

        axios.post("http://localhost:5000/api/webuser/confirm", { email, code })
            .then(res => {
                localStorage.setItem("token", JSON.stringify(res.data.token))
                navigate("/")
            })

    };

    const handleChange = (event) => {
        setCode(String(event.target.value));
    };

    return (
        <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid textAlign="center" marginBottom={2}>
            <Typography variant="h5" fontWeight="bold">
             Comfirm
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="comfirm"
              label="Comfirm"
              variant="standard"
              placeholder="Comfirm"
              onChange={handleChange}
              value={code}
         
            />
            <Grid marginTop={3}>
              <Button
                fullWidth
                textAlign="center"
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Comfirm
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
}

export default ConfirmPage;

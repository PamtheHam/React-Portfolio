import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="row-auth-wrapper">
        <div className="form-wrapper">
          <div className="form">
            <p className="nav-link"> Contact Me </p>
            <TextField
              fullWidth
              id="outlined-required"
              placeholder="First Name"
            />
            <TextField
              fullWidth
              id="outlined-required"
              placeholder="Last Name"
            />
            <TextField fullWidth id="outlined-required" placeholder="Email" />
            <TextField fullWidth id="outlined-required" placeholder="Message" />
            <button className="button">Send</button>
          </div>
        </div>
      </div>
    </Box>
  );
}

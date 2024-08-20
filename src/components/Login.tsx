import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { strings } from "../assets/strings";
import { useAppSelector } from "../hooks/useRedux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const {
    config: {
      configurationManager: {
        username: userNameRedux,
        password: passwordRedux,
      },
    },
  } = useAppSelector((state) => state.app);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const strs = strings.login;

  const handleSubmit = (e: React.FormEvent) => {
    if (userName === userNameRedux && password === passwordRedux) {
      navigate(strings.routes.editConfig);
    } else {
      let error = "";
      if (userName !== userNameRedux) error = strs.userNameError;
      if (userName !== userNameRedux && password !== passwordRedux)
        error += " , ";
      if (password !== passwordRedux) error += strs.passwordError;
      setError(error);
    }
  };
  const handleUserName = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserName(e.target.value);
    setError("");
  };
  const handlePassword = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
    setError("");
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography variant="h5">{strs.title}</Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label={strs.userNameLabel}
            variant="outlined"
            fullWidth
            margin="normal"
            value={userName}
            onChange={handleUserName}
          />
          <TextField
            label={strs.passwordLabel}
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePassword}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={!!error}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

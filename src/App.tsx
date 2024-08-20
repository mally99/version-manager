import { useEffect } from "react";
import "./App.css";
import { fetchData } from "./services/dataService";
import { setConfig } from "./redux/appSlice";
import { Routes } from "./Routes";
import { useAppDispatch } from "./hooks/useRedux";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

export const App = () => {
  const dispatch = useAppDispatch();

  const fetchAndSetConfig = async () => {
    const temp = await fetchData();
    dispatch(setConfig(temp));
  };

  useEffect(() => {
    fetchAndSetConfig();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

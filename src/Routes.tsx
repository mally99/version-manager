import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Navigate,
  Route,
} from "react-router-dom";
import { LoginForm } from "./components/Login";
import { strings } from "./assets/strings";
import { EditConfig } from "./components/EditConfig";
import { ExportJsonFile } from "./components/ExportJsonFile";

export const Routes = () => {
  const strs = strings.routes;
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Navigate to={strs.logIn} replace />} />
        <Route path={strs.logIn} element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path={strs.editConfig} element={<EditConfig />} />
      </ReactRoutes>
    </Router>
  );
};

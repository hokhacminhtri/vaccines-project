import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { renderRoutes, routes } from "./configs/route.config";
import theme from "./configs/theme.config";
import { UserContext } from "./contexts/userContext";
import NotFound from "./pages/NotFound";

function App() {
  const { isAuth } = useContext(UserContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          {renderRoutes(routes, isAuth)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

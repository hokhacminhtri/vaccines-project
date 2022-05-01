import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { Suspense, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalLoading from './components/commons/GlobalLoading';
import { renderRoutes, routes } from './configs/route.config';
import theme from './configs/theme.config';
import { UserContext } from './contexts/userContext';
import NotFound from './pages/NotFound';
import './styles/common.css';
import './styles/reset.css';

function App() {
  const { isAuth } = useContext(UserContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<GlobalLoading />}>
          <Routes>
            {renderRoutes(routes, isAuth)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

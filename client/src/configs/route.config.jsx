import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
const LoginPage = React.lazy(() => import('../pages/admin/LoginPage'));
const RegistrationPage = React.lazy(() => import('../pages/RegistrationPage'));
const VaccinePage = React.lazy(() => import('../pages/VaccinePage'));
const VaccineDetailPage = React.lazy(() =>
  import('../pages/VaccineDetailPage'),
);
const VaccinePackageDetailPage = React.lazy(() =>
  import('../pages/VaccinePackageDetailPage'),
);

const routes = [
  {
    path: '/',
    element: <HomePage />,
    isProtected: false,
  },
  {
    path: '/admin/login',
    element: <LoginPage />,
    isProtected: false,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
    isProtected: false,
  },
  {
    path: '/vaccine',
    element: <VaccinePage />,
    isProtected: false,
  },
  {
    path: '/vaccine/:vaccineId',
    element: <VaccineDetailPage />,
    isProtected: false,
  },
  {
    path: '/vaccine-package/:packageId',
    element: <VaccinePackageDetailPage />,
    isProtected: false,
  },
];

function renderRoutes(routes, isAuth = false) {
  return (
    <>
      {routes.map((route, index) => {
        const { path, isProtected, element } = route;
        return (
          <Route
            key={index}
            path={path}
            element={
              <>
                {isProtected && !isAuth ? (
                  <Navigate replace={true} to="/admin/login" />
                ) : (
                  element
                )}
              </>
            }
          />
        );
      })}
    </>
  );
}

export { routes, renderRoutes };

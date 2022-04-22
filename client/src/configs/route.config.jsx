import { Navigate, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    isProtected: true,
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
                  <Navigate replace={true} to="/login" />
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

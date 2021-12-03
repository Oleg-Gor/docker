import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export function Redirect({ children }) {
  const name  = useSelector((state) => state.movie.name);
console.log('api2', name)
  return name ? children : <Navigate to="/login" replace />;
}

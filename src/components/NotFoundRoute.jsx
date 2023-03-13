import { useLocation } from 'react-router-dom';

const NotFoundRoute = () => {
  let location = useLocation();
  return (
    <div className="container">
      <h2>

        No match for <code>{location.pathname}</code>
      </h2>
      <p>URL inválida!</p>
    </div>
  );
};

export default NotFoundRoute;

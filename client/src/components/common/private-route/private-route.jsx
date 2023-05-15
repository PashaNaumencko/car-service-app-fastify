import { Navigate } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = {};

  const hasUser = Boolean(user);

  return hasUser ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to={{ pathname: AppRoute.LOGIN, state: { from: rest.location } }}
    />
  );
};

export { PrivateRoute };

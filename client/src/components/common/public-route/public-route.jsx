import { Navigate } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = {};
  const hasUser = Boolean(user);

  return hasUser ? (
    <Navigate
      to={{ pathname: AppRoute.ROOT, state: { from: rest.location } }}
    />
  ) : (
    <Component {...rest} />
  );
};

export { PublicRoute };

import { Navigate } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => state.sign.user);

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

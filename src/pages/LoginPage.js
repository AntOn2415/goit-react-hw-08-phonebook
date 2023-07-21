import { Helmet } from 'react-helmet';
import  LoginView from '../components/LoginView';

export default function LoginPage () {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginView />
    </div>
  );
}

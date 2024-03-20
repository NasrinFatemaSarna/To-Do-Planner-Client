import  { lazy, Suspense } from 'react'
import Loader from '../components/Loader';

const LoginPage = () => {
    const Login = lazy(() => import('../components/Login'));

    return (
        <div>
          <Suspense fallback={<Loader />}>
            <Login />
        </Suspense>
        
        
        </div>
    );
};

export default LoginPage;
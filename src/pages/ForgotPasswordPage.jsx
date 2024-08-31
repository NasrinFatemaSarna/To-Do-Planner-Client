

import  { lazy, Suspense } from 'react';
import Loader from '../components/Loader';

const ForgotPassword = () => {
    const ForgotPassword  = lazy(() => import('../components/ForgotPassword'));

 return (
        <div>
           <Suspense fallback={<Loader />}>
            <ForgotPassword />
        </Suspense>
        </div>
    );
};

export default ForgotPassword;
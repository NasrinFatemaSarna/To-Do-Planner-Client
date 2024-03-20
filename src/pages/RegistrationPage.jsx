import { lazy, Suspense } from 'react'
import Loader from '../components/Loader';


const RegistrationPage = () => {
    const Registration = lazy(() => import('../components/Registration'));

    return (
        <div>
             <Suspense fallback={<Loader />}>
            <Registration />
        </Suspense>
           
        </div>
    );
};

export default RegistrationPage;
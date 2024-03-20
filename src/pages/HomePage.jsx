import {lazy, Suspense} from 'react';
import MainLayout from "../layout/MainLayout";
import Loader from '../components/Loader';

const HomePage = () => {
    const Home = lazy(() => import('../components/Home'));
    
return (
        <div>
            <MainLayout>
            <Suspense fallback={<Loader />}>
            <Home />
        </Suspense>
            </MainLayout>
        </div>
    );
};

export default HomePage;
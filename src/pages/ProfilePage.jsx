 

import { lazy, Suspense } from 'react';
import Loader from '../components/Loader'; 
import MainLayout from "../layout/MainLayout";
const ProfilePage = () => {

    const Profile = lazy(() => import('../components/Profile'));
    return (
        <div>
            <MainLayout>
            <Suspense fallback={<Loader />}>
            <Profile  />
        </Suspense>
            </MainLayout>
        </div>
    );
};

export default ProfilePage;
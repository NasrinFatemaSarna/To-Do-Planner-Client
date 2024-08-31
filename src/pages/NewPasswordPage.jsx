import  {  Suspense } from 'react';
import Loader from '../components/Loader';
import NewPassword from '../components/NewPassword'; // Import the component directly



const NewPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <NewPassword />
            </Suspense>
        </div>
    );
};

export default NewPasswordPage;

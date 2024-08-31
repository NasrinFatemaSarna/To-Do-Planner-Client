
import { lazy, Suspense } from "react";
import Loader from '../components/Loader';
import MainLayout from "../layout/MainLayout";


const NewTodoPage = () => {
    const Todos = lazy(() => import('../components/Todos'));
    return (

      <div>
            <MainLayout>
            <Suspense fallback={<Loader />}>
            < Todos/>
        </Suspense>
            </MainLayout>
        </div>
    );
};

export default NewTodoPage ;
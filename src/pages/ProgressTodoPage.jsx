
import { lazy, Suspense } from "react";
import Loader from '../components/Loader';
import MainLayout from "../layout/MainLayout";
const ProgressTodoPage = () => {

    const ProgressTodo = lazy(() => import('../components/ProgressTodo'));
    return (
        
        <MainLayout>
        <Suspense fallback={<Loader />}>
        < ProgressTodo/>
    </Suspense>
        </MainLayout>
    );
};

export default ProgressTodoPage;
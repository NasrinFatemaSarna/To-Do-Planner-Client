import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import Loader from '../components/Loader';

const CanceledTodoPage = () => {
    const CanceledTodo = lazy(() => import('../components/CanceledTodo'));
    return (
        <div>
     <MainLayout>
            <Suspense fallback={<Loader />}>
            <CanceledTodo />
        </Suspense>
            </MainLayout>
        </div>
    );
};

export default CanceledTodoPage;
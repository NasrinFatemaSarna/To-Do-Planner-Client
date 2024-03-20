import { lazy, Suspense } from 'react';
import MainLayout from "../layout/MainLayout";
import Loader from '../components/Loader';


const CompletedTodoPage = () => {
    const CompletedTodo = lazy(() => import('../components/CompletedTodo'));
    return (
        <div>
            <MainLayout>
            <Suspense fallback={<Loader />}>
            <CompletedTodo />
        </Suspense>
            </MainLayout>
        </div>
    );
};

export default CompletedTodoPage;
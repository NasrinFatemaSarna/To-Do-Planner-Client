
import { lazy, Suspense } from "react";
import Loader from '../components/Loader';
import MainLayout from "../layout/MainLayout";


const NewTodoPage = () => {
    const NewTodo = lazy(() => import('../components/NewTodo'));
    return (

      <div>
            <MainLayout>
            <Suspense fallback={<Loader />}>
            < NewTodo/>
        </Suspense>
            </MainLayout>
        </div>
    );
};

export default NewTodoPage;
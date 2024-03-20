import { lazy, Suspense } from "react";
import Loader from '../components/Loader';
import MainLayout from "../layout/MainLayout";

const CreateTodoPage = () => {
    const CreateTodo = lazy(() => import('../components/CreateTodo'));
 
return (
        <div>
          <MainLayout>
            <Suspense fallback={<Loader />}>
            < CreateTodo />
        </Suspense>
            </MainLayout>
        </div>
    );
};

export default CreateTodoPage;
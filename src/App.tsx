import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import routes from '@/constants/routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={routes.layout}>
      {routes.routes.map(({ path, element: Element }) => (
        <Route path={path} element={<Element />} />
      ))}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

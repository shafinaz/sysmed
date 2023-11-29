import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import LoginPatient from "./patient/LoginPatient";
import LoginAdmin from "./admin/LoginAdmin";
import LoginDoctor from "./doctor/LoginDoctor";
import Signup from "./patient/Signup";
import HomePatient from "./patient/HomePatient";
import HomeDoctor from "./doctor/HomeDoctor"
import HomeAdmin from "./admin/HomeAdmin"
import { isUserValid } from "./lib/pocketbase";
import { collectionName } from './lib/pocketbase';

const renderHome = () => {
  if (collectionName.collectionName === 'admin') {
    return <HomeAdmin />;
  } else if (collectionName.collectionName === 'doctor') {
    return <HomeDoctor />;
  } else {
    return <HomePatient />;
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}> 
      <Route index element={isUserValid ? renderHome() : <LoginPatient/>} />
      <Route path="login/patient" element={<LoginPatient />} />
      <Route path="login/doctor" element={<LoginDoctor />} />
      <Route path="login/admin" element={<LoginAdmin />} />
      <Route path="home/patient" element={<HomeAdmin />} />
      <Route path="home/doctor" element={<HomeDoctor />} />
      <Route path="home/admin" element={<HomePatient />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
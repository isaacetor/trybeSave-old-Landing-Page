import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../home';
import About from '../home/about/about';
import AuthPage from '../auth/auth';
import ForgotPasswordPage from '../auth/ForgotPassword';
import MainLayout from '../layouts/Main_layout';
import DashboardLayout from '../layouts/DashboardLayout';
import ContactUs from '../home/contact/contactUs';
import NotFound from '../404/NotFound';

const allRoutes = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <LandingPage />
      </MainLayout>
    ),
  },
  {
    path: '/about',
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: '/contact',
    element: (
      <MainLayout>
        <ContactUs />
      </MainLayout>
    ),
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/auth/forget-password',
    element: <ForgotPasswordPage />,
  },

  // Dashboard routes
  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        {/* <DashboardHome /> */}
        <p>dashbord home</p>
      </DashboardLayout>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default allRoutes;

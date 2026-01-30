import React from 'react';
import { RouterProvider } from 'react-router-dom';
import allRoutes from './routes/allRoutes';
import { Toaster } from 'sonner';
// import ScrollToTop from './static/scrollToTop';

const App: React.FC = () => {
  return (
    <>
      {/* <div>
        <ScrollToTop />
      </div> */}
      <RouterProvider router={allRoutes} />
      <Toaster
        richColors
        position="top-right"
        closeButton
      />
    </>
  );
};

export default App;

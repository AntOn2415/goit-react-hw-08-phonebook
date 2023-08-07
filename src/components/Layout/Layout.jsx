import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { toastConfig } from 'helpers';
import { ContainerDiv } from './Layout.styled';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderForLayout } from 'components/Loader/Loader';

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <AppBar />
      <ContainerDiv isHomePage={isHomePage}>
        <Suspense fallback={<LoaderForLayout />}>
          <Outlet />
        </Suspense>
        <ToastContainer {...toastConfig} />
      </ContainerDiv>
    </>
  );
};

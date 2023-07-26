import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { toastConfig } from 'helpers';
import {ContainerDiv} from './Layout.styled'
import 'react-toastify/dist/ReactToastify.css';
import { LoaderForLayout } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <ContainerDiv>
      <Suspense fallback={<LoaderForLayout/>}>
        <Outlet />
      </Suspense>
      <ToastContainer {...toastConfig} />
    </ContainerDiv>
    </>
    
  );
};

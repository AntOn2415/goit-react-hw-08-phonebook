import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { toastConfig } from 'helpers';
import {ContainerDiv} from './Layout.styled'
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <ContainerDiv>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer {...toastConfig} />
    </ContainerDiv>
    </>
    
  );
};

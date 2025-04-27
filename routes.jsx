import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Crypto = lazy(() => import('./pages/Crypto'));
const News = lazy(() => import('./pages/News'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/crypto/*', element: <Crypto /> },
  { path: '/news/*', element: <News /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> }
];
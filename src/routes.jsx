import { createBrowserRouter } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Layout from './Layout/Layout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    errorElement: <div>Page Not Found </div>,
    children: [
      { index: true, element: <Hero/> },
      { path: 'about', element: <About/> },
      { path: 'projects', element: <Projects/> },
      { path: 'contact', element: <Contact/> },
    ]
  }
]);

export default router;
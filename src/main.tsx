import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);

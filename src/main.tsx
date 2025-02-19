import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

async function enableMocking() {
  // 로컬에서만 실행 예정이므로 주석 처리했습니다.
  //   if (!import.meta.env.DEV) {
  //     return;
  //   }
  const { worker } = await import('./mocks/browser.ts');

  return worker.start({
    onUnhandledRequest: (request, print) => {
      if (!request.url.includes('/api/')) {
        return;
      }

      print.warning();
    }
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
});

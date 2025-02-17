import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className="w-full max-w-[800px] min-w-[400px] mx-auto flex flex-col p-5">
      <Outlet />
    </div>
  );
}

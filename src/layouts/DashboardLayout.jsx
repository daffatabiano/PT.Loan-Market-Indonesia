import { useState } from 'react';
import Navbar from '../components/Navbar';
import SidebarCustom from '../components/Sidebar';
import { useLocation } from 'react-router-dom';

export default function DashboardLayout(prop) {
  const { children } = prop;
  const [open, setOpen] = useState(false);
  const currentPath = useLocation().pathname;

  const title = currentPath.split('/')[1];

  return (
    <>
      <SidebarCustom open={open} setOpen={() => setOpen((curr) => !curr)} />
      <Navbar title={title} sidebarHandler={() => setOpen((curr) => !curr)} />
      <div className="md:ps-[22%] ps-4 pt-8 w-full h-full">{children}</div>
    </>
  );
}

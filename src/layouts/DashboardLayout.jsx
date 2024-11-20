import Navbar from '../components/Navbar';
import SidebarCustom from '../components/Sidebar';

export default function DashboardLayout(prop) {
  const { children } = prop;
  return (
    <>
      <SidebarCustom />
      <Navbar />
      <div className="ps-[22%] pt-[4.5rem] w-full h-full bg-red-600">
        {children}
      </div>
    </>
  );
}

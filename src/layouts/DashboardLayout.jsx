import Navbar from '../components/Navbar';
import SidebarCustom from '../components/Sidebar';

export default function DashboardLayout(prop) {
  const { children } = prop;
  return (
    <>
      <SidebarCustom />
      <Navbar />
      <div className="ps-[22%] pt-8 w-full h-full">{children}</div>
    </>
  );
}

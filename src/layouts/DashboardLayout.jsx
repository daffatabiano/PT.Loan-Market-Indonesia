import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function DashboardLayout(prop) {
  const { children } = prop;
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ps-[22%] pt-[4.5rem]">{children}</div>
    </>
  );
}

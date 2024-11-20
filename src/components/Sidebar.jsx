import { useLocation } from 'react-router-dom';
import { CompanyLogo } from '../assets';
import { sidebarItems } from '../datas/sidebar-datas';
import { Sidebar } from 'flowbite-react';
import { FaChevronLeft } from 'react-icons/fa';

export default function SidebarCustom({ open, setOpen }) {
  const currentPath = useLocation().pathname;

  return (
    <aside
      className={`h-screen fixed z-50 transition transform duration-300 ease-in-out bg-sidebar md:w-1/5 flex flex-col border-e-4 border-[#d9d9d9] ${
        open ? 'translate-x-0 w-full ' : '-translate-x-full w-full'
      } md:translate-x-0 `}>
      {open && (
        <button
          type="button"
          onClick={setOpen}
          className="absolute top-4 right-4 p-1 rounded-md bg-transparent text-2xl border-2 border-primary text-primary">
          <FaChevronLeft />
        </button>
      )}
      <img
        src={CompanyLogo}
        alt="company-logo"
        className="w-24 h-24 mx-auto md:mb-4"
      />
      <Sidebar
        className="h-full w-full"
        aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sidebarItems?.map((item) => {
              if (item?.additional) {
                return (
                  <Sidebar.Collapse
                    icon={item.icon}
                    label={item.name}
                    className="p-2 capitalize hover:text-white hover:bg-primary rounded-lg"
                    key={item.name}>
                    {item?.additional?.map((additional) => (
                      <Sidebar.Item
                        className={`p-2 capitalize ${
                          currentPath === additional?.path && 'bg-primary'
                        } p-2 hover:bg-primary hover:text-white rounded-xl`}
                        key={additional?.name}
                        href={additional?.path}>
                        {additional?.name}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.Collapse>
                );
              }
              return (
                <Sidebar.Item
                  className={`p-2 capitalize ${
                    currentPath === item.path && 'bg-primary text-white'
                  } hover:bg-primary rounded-lg hover:text-white`}
                  key={item.name}
                  icon={item.icon}
                  href={item.path}>
                  {item.name}
                </Sidebar.Item>
              );
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </aside>
  );
}

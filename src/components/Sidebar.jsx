import { CompanyLogo } from '../assets';
import { sidebarItems } from '../datas/sidebar-datas';
import { Sidebar as FlowbiteSideBar } from 'flowbite-react';

export default function Sidebar() {
  const currentPath = window.location.pathname;

  return (
    <aside className="h-screen fixed bg-white w-1/5 flex flex-col border-e-4 border-slate-500">
      <img src={CompanyLogo} alt="company-logo" className="w-24 h-24 mx-auto" />
      <FlowbiteSideBar className="pt-6 flex flex-col gap-2 w-full">
        {sidebarItems.map((item) => {
          if (item.additional) {
            return (
              <FlowbiteSideBar.Collapse key={item.name} label={item.name}>
                {item.additional.map((additional) => (
                  <FlowbiteSideBar.Item
                    className={`${
                      currentPath === additional.path && 'bg-primary'
                    } p-2 hover:bg-primary rounded-xl`}
                    key={additional.name}
                    href={additional.path}>
                    {additional.name}
                  </FlowbiteSideBar.Item>
                ))}
              </FlowbiteSideBar.Collapse>
            );
          }
          return (
            <Sidebar.Item
              className={`p-2 ${
                currentPath === item.path && 'bg-primary'
              } hover:bg-primary rounded-lg`}
              key={item.name}
              icon={item.icon}
              text={item.text}
              path={item.path}
            />
          );
        })}
      </FlowbiteSideBar>
    </aside>
  );
}

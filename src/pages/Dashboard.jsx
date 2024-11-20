import CardWrapper from '../components/Cards/CardWrapper';
import DashboardLayout from '../layouts/DashboardLayout';
import { cardSummaryData } from '../datas/card-summary.data';
import { MdOutlineContactMail, MdOutlineShoppingBag } from 'react-icons/md';
import { CiBank } from 'react-icons/ci';
import { LuStickyNote } from 'react-icons/lu';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="ps-[22%]">
        <div className="grid grid-cols-4 gap-4">
          {cardSummaryData.map((item) => (
            <CardSummaryInfo
              key={item.name}
              icon={item.icon}
              text={item.name}
              total={item.total}
            />
          ))}
        </div>
        <CardWrapper>
          <div className="flex gap-4">
            <div></div>
            <hr className="w-[1px] h-full bg-[#E2F0FF]" />
            <div></div>
          </div>
        </CardWrapper>
      </div>
    </DashboardLayout>
  );
}

function CardSummaryInfo({ text, total }) {
  const icons = {
    contact: <MdOutlineContactMail />,
    loan: <LuStickyNote />,
    product: <MdOutlineShoppingBag />,
    bank: <CiBank />,
  };
  return (
    <CardWrapper>
      <div className="flex justify-around place-items-center">
        <p className="p-2 rounded-full text-2xl bg-primary/20 text-primary">
          {icons[text]}
        </p>
        <div className="flex flex-col gap-2 text-center font-bold  ">
          <p className="text-xl text-black uppercase">{text}</p>
          <p className="text-2xl font-bold text-primary">{total}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

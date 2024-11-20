import { CiBank } from 'react-icons/ci';
import { LuStickyNote } from 'react-icons/lu';
import { MdOutlineContactMail, MdOutlineShoppingBag } from 'react-icons/md';
import CardWrapper from './CardWrapper';

export default function CardSummaryInfo({ text, total }) {
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

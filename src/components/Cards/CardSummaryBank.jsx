import { BsBuilding, BsPiggyBank } from 'react-icons/bs';
import CardWrapper from './CardWrapper';
import { CiCreditCard1 } from 'react-icons/ci';
import { FaUserTie } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';

export default function CardSummaryBank({ title, icon }) {
  const icons = {
    kpr: <TiHome />,
    refinancing: <FaUserTie />,
    kmu: <CiCreditCard1 />,
    deposito: <BsPiggyBank />,
    takeover: <BsBuilding />,
  };
  return (
    <CardWrapper>
      <div className="flex flex-col gap-6 text-slate-600 justify-center items-center">
        <p className="text-6xl">{icons[icon]}</p>
        <p className="text-center hidden sm:block">{title}</p>
      </div>
    </CardWrapper>
  );
}

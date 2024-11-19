import { Button, Popover } from 'flowbite-react';
import { useState } from 'react';
import { BsBuildings } from 'react-icons/bs';
import { CiBellOn, CiMail } from 'react-icons/ci';
import { IoChevronDown } from 'react-icons/io5';
import { ProfilePicture } from '../assets';
import { FiPhone } from 'react-icons/fi';

export default function Navbar() {
  const [bellOpen, setBellOpen] = useState(false);

  return (
    <nav className="bg-white p-4 h-16 flex justify-between items-center shadow-md">
      <h1 className="text-[#4F5051] text-2xl font-thin ">Dashboard</h1>
      <div className="flex items-center gap-2">
        <div>
          <Popover
            aria-labelledby="simple-popover"
            open={bellOpen}
            onOpenChange={setBellOpen}
            content={
              <div className="w-full flex place-items-center">
                <h1 className="text-md font-thin text-slate-400">
                  This is Notifications example ui
                </h1>
              </div>
            }>
            <Button>
              <CiBellOn />
              <IoChevronDown />
            </Button>
          </Popover>
          <span className="text-[#646567] text-lg uppercase">
            Yohannes affandy
          </span>
        </div>
      </div>
    </nav>
  );
}

export function Header() {
  return (
    <header className="flex p-8 sticky top-0 left-0 right-0 w-full items-center gap-4 justify-start">
      <img src={ProfilePicture} alt="profile" />
      <div>
        <h1>Yohannes Affandy</h1>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <InformationsField
              icon={<BsBuildings />}
              text="Loan Market Office Dev"
            />
            <InformationsField icon={'ID'} text="LM9990001" />
          </div>
          <hr className="w-[1px] h-10 bg-[#E2F0FF]" />
          <div className="flex flex-col gap-2">
            <InformationsField icon={<CiMail />} text="it@loanmarket.co.id" />
            <InformationsField icon={<FiPhone />} text="6281234567890" />
          </div>
        </div>
      </div>
    </header>
  );
}

function InformationsField(prop) {
  const { icon, text } = prop;
  return (
    <p className="flex items-center text-black">
      <span className="p-2 rounded-full bg-[#E2F0FF] text-[#17A9E2]">
        {icon}
      </span>
      {text}
    </p>
  );
}

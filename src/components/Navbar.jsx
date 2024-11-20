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
    <nav className="w-full">
      <div className="bg-sidebar border-b-2 ps-[22%] border-slate-800 sticky top-0 left-0 right-0 w-full p-4 h-20 flex justify-between items-center shadow-md">
        <h1 className="text-[#4F5051] text-2xl w-fit font-thin ">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Popover
            aria-labelledby="simple-popover"
            open={bellOpen}
            onOpenChange={setBellOpen}
            className="flex items-center gap-2 bg-transparent text-xl text-black hover:bg-transparent focus:bg-transparent hover:border-0"
            content={
              <div className="w-full flex place-items-center">
                <h1 className="text-sm text-center font-thin text-slate-400 w-32 h-44 bg-white flex place-items-center dropshadow-md p-2">
                  This is Notifications example ui
                </h1>
              </div>
            }>
            <Button className="bg-transparent hover:bg-none text-black">
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
      <img
        src={ProfilePicture}
        alt="profile"
        className="w-24 h-24 rounded-full"
      />
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
      <span className="p-2 rounded-full bg-[#E2F0FF] text-primary">{icon}</span>
      {text}
    </p>
  );
}

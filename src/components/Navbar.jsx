import { Button, Popover } from 'flowbite-react';
import { useState } from 'react';
import { CiBellOn } from 'react-icons/ci';
import { IoChevronDown } from 'react-icons/io5';

export default function Navbar() {
  const [bellOpen, setBellOpen] = useState(false);

  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-[#4F5051] text-2xl font-thin ">Dashboard</h1>
      <div className="flex items-center gap-2">
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
      </div>
    </nav>
  );
}

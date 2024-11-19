export default function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-[#4F5051] text-2xl font-thin ">Dashboard</h1>
      <div className="flex items-center gap-2">
        <Dropdown></Dropdown>
      </div>
    </nav>
  );
}

export function TabsProduct({ section, setSection }) {
  return (
    <div className="w-full flex gap-4 justify-center items-end">
      <button
        type="button"
        onClick={() => setSection('bank')}
        className={` md:text-2xl text-lg w-36 pb-4 ${
          section === 'bank' && 'border-primary border-b-4 '
        } bg-transparent`}>
        Bank
      </button>
      <button
        type="button"
        onClick={() => setSection('developer')}
        className={` md:text-2xl text-lg w-36 pb-4 ${
          section === 'developer' && 'border-primary border-b-4 '
        } bg-transparent`}>
        Developer
      </button>
    </div>
  );
}

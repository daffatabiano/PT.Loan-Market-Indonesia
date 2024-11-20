import { FaSortAlphaDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

const HeaderProductBank = () => {
  return (
    <div className="w-full flex gap-6 pt-4">
      <div className="w-2/4 rounded-lg relative bg-white drop-shadow-md border-none">
        <input
          type="search"
          placeholder="Cari Berdasarkan nama"
          className="p-2 rounded-lg w-full bg-transparent border-none focus:outline-none"
        />
        <i className="absolute right-4 top-3 text-xl text-primary">
          <IoIosSearch />
        </i>
      </div>

      <select
        name="filter"
        className="p-2 rounded-lg w-1/4 drop-shadow-md border-none focus:outline-none">
        <option value="kredit-pernikahan">Kredit Pernikahan</option>
        <option value="kredit-usaha">Kredit Usaha</option>
      </select>

      <button className="bg-white px-4 py-2 rounded-lg w-1/6 flex items-center drop-shadow-md border-none gap-2">
        <FaSortAlphaDown /> Sort
      </button>

      <button className="text-white bg-primary px-4 py-2 rounded-lg w-2/5 drop-shadow-md border-none">
        + Tambahkan Product
      </button>
    </div>
  );
};

export default HeaderProductBank;

import { FaPaintBrush } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import { MdAccountCircle, MdHomeFilled, MdPhone, MdWork } from 'react-icons/md';

interface MenuBarProps {
  setPageSelect: React.Dispatch<React.SetStateAction<string>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ setPageSelect }) => {
  const menuItems: { id: number; title: string; icon: JSX.Element }[] = [
    { id: 1, title: 'Home', icon: <MdHomeFilled /> },
    { id: 2, title: 'About', icon: <MdAccountCircle /> },
    { id: 3, title: 'Experience', icon: <MdWork /> },
    { id: 4, title: 'Project', icon: <IoMdPaperPlane /> },
    { id: 5, title: 'Skill', icon: <FaPaintBrush /> },
    { id: 6, title: 'Contact', icon: <MdPhone /> },
  ];

  return (
    <section className="fixed left-10 top-1/2 transform -translate-y-1/2 flex items-center justify-center z-[1000]">
      <div className="flex flex-col border border-gray-300 shadow-md rounded-lg px-6 py-8 bg-white">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPageSelect(item.title)}
            className="flex items-center gap-x-3 py-4 px-3 hover:bg-gray-200 group rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            tabIndex={0} // Agar fokus berfungsi saat tombol diaktifkan
          >
            <span className="text-2xl text-teal-600 group-hover:scale-110 transition-transform active:bg-violet-700 focus:ring focus:ring-violet-300">{item.icon}</span>
            <span className="text-lg font-medium text-gray-700 group-hover:text-teal-600 transition-colors">{item.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default MenuBar;

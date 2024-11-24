import { IoMdPaperPlane } from 'react-icons/io';
import { MdAccountCircle, MdHomeFilled, MdPhone, MdWork } from 'react-icons/md';

interface MenuBarProps {
  setPageSelect: React.Dispatch<React.SetStateAction<string>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ setPageSelect }) => {
  const data = [
    {
      id: 1,
      title: 'Home',
      icon: <MdHomeFilled />,
    },
    {
      id: 1,
      title: 'About',
      icon: <MdAccountCircle />,
    },
    {
      id: 1,
      title: 'Experience',
      icon: <MdWork />,
    },
    {
      id: 1,
      title: 'Project',
      icon: <IoMdPaperPlane />,
    },
    {
      id: 1,
      title: 'Contact',
      icon: <MdPhone />,
    },
  ];
  return (
    <section className="fixed left-10 top-1/2 transform -translate-y-1/2 flex items-center justify-center min-h-screen">
      <div className="flex flex-col  border rounded-lg px-6 py-[50px] px-4">
        {data.map((e, index) => (
          <button key={index} className="flex gap-x-2 hover:cursor-pointer py-4 px-2 hover:bg-gray-200 group rounded-lg transition duration-300" onClick={() => setPageSelect(e.title)}>
            <p className="text-2xl group-hover:scale-115">{e.icon}</p>
            <p className="text-2xl group-hover:scale-115">{e.title}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default MenuBar;

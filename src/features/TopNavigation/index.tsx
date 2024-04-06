import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu } from 'lucide-react';

import Logo from 'assets/Logo.webp';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SliderNavigation, { SliderNavigationType } from './SliderNavigation';

const data: SliderNavigationType = [
  { title: 'Home', link: '' },

  {
    title: 'Products',
    subMenu: [
      { title: 'Item 1', link: '' },
      { title: 'Item 2', link: '' },
      { title: 'Item 3', link: '' },
      { title: 'Item 4', link: '' },
    ],
  },
  { title: 'Infrastructure', link: '' },
  { title: 'About Us', link: '' },
  {
    title: 'Gallery',
    subMenu: [
      { title: 'Item 1', link: '' },
      { title: 'Item 2', link: '' },
      { title: 'Item 3', link: '' },
      { title: 'Item 4', link: '' },
    ],
  },
];
const TopNavigation = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const onToggle = () => {
    setOpenSheet(!openSheet);
  };
  return (
    <>
      <SliderNavigation open={openSheet} onClose={onToggle} data={data} />
      <nav className="py-4 px-12 bg-white flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-[53px] h-[37px] sm:w-[91.43px] sm:h-16 mr-6" />
          <h1 className="text-[32px] font-medium leading-[37.57px] text-left hidden md:inline-block">
            Sali Balaji Polygreen Industries
          </h1>
        </div>
        <div className="gap-5 hidden md:flex items-center flex-wrap">
          {data.map((item, index) => {
            if (item.subMenu) {
              return (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="ghost">
                      {item.title}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subMenu.map((i, ind) => (
                      <DropdownMenuItem key={i.title}>{i.title}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return <Button variant="ghost">{item.title}</Button>;
          })}

          <Button className="px-8 py-6 rounded-none">Inquire now</Button>
        </div>
        <div className="gap-3 flex md:hidden items-center flex-wrap">
          <Button className="md:px-8 md:py-6 p-3.5 rounded-none">
            <span className="block">Inquire now</span>
          </Button>

          <Button variant="ghost" className="p-0" onClick={onToggle}>
            <Menu className="h-6 w-8" />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default TopNavigation;

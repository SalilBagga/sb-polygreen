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
import { Link } from 'react-router-dom';
import routes from 'routes';
import { PRODUCT_DATA } from 'utils/data';
import InquireNowButton from 'components/InquireNowButton';

const data: SliderNavigationType = [
  { title: 'Home', link: '' },

  {
    title: 'Products',
    subMenu: PRODUCT_DATA.map((item) => ({
      title: item.name,
      link: routes.productLink.replace(':productSlug', item.slug),
    })),
  },
  { title: 'About Us', link: routes.aboutUs },
  {
    title: 'Gallery',
    link: routes.gallery,
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
      <nav className="py-4 px-4 sm:px-12 bg-white flex justify-between items-center">
        <div className="flex items-center">
          <Link to={routes.home}>
            <img
              loading="lazy"
              src={Logo}
              alt="logo"
              className="w-[53px] h-[37px] sm:w-[91.43px] sm:h-16 mr-6"
            />
          </Link>
          <h1 className="text-[32px] font-medium leading-[37.57px] text-left hidden md:inline-block">
            Saii Balaji Polygreen Industries
          </h1>
        </div>
        <div className="hidden lg:flex items-center flex-wrap">
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
                      <DropdownMenuItem key={i.title}>
                        <Link to={i.link || ''}>{i.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Button asChild variant="ghost">
                <Link to={item.link || ''}>{item.title}</Link>
              </Button>
            );
          })}
          <InquireNowButton className="px-8 py-6 md:ml-2 rounded-none" />
        </div>
        <div className="gap-3 flex lg:hidden items-center flex-wrap">
          <InquireNowButton className="md:px-8 md:py-6 p-3.5 rounded-none" />

          <Button variant="ghost" className="p-0" onClick={onToggle}>
            <Menu className="h-6 w-8" />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default TopNavigation;

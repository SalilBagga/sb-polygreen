import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Button } from '../../@/components/ui/button';
import Logo from '../../assets/Logo.webp';

const TopNavigation = () => {
  return (
    <nav className="py-4 px-12 bg-white flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-[91.43px] h-16 mr-6" />
        <h1 className="text-[32px] font-medium leading-[37.57px] text-left">
          Sali Balaji Polygreen Industries
        </h1>
      </div>
      <div className="gap-5">
        <Button variant="ghost">Home</Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              Products
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
            <DropdownMenuItem>Item 4</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost">Infrastructure</Button>
        <Button variant="ghost">About Us</Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              Gallery
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
            <DropdownMenuItem>Item 4</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="w-[152px] h-[67px] rounded-none">Inquire now</Button>
      </div>
    </nav>
  );
};

export default TopNavigation;

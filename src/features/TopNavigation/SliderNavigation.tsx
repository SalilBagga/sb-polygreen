import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

type Option = { title: string; link?: string };

export type SliderNavigationType = (Option & { subMenu?: Option[] })[];

const SliderNavigation = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: SliderNavigationType;
}) => {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <div className="flex flex-col justify-start text-start gap-4 mb-4">
          {data.map((item, index) => {
            if (item.subMenu) {
              return (
                <DropdownMenu>
                  <DropdownMenuTrigger className="justify-start">
                    <Button variant="ghost" className="mr-auto flex">
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
              <Button className="justify-start" variant="ghost">
                <Link to={item.link || ''}>{item.title}</Link>
              </Button>
            );
          })}
        </div>
        <Button className="px-8 py-6 rounded-none w-full">Inquire now</Button>
      </SheetContent>
    </Sheet>
  );
};

export default SliderNavigation;

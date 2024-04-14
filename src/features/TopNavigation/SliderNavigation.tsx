import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import InquireNowButton from 'components/InquireNowButton';
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
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger
                      className={buttonVariants({ variant: 'ghost', className: 'justify-between' })}
                    >
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-1 flex flex-col gap-2 pb-0 bg-green-20">
                      {item.subMenu.map((item) => (
                        <Button className="text-start" variant="ghost">
                          <Link className="w-full" to={item.link || ''}>
                            {item.title}
                          </Link>
                        </Button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }

            return (
              <Button className="text-start" variant="ghost">
                <Link className="w-full" to={item.link || ''}>
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </div>
        <InquireNowButton className="px-8 py-6 rounded-none w-full" />
      </SheetContent>
    </Sheet>
  );
};

export default SliderNavigation;

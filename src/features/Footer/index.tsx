import { Button } from '@/components/ui/button';
import Logo from 'assets/Logo.webp';
import { Facebook, Linkedin, LinkedinIcon, Mail, Map, MapPin, Phone, Twitter } from 'lucide-react';

const pages = [
  {
    title: 'Home',
    link: '',
  },
  {
    title: 'Products',
    link: '',
  },
  {
    title: 'Infrastructure',
    link: '',
  },
  {
    title: 'About',
    link: '',
  },
];
const socials = [
  {
    icon: () => <Facebook className="size-5" />,
    link: '',
  },
  {
    icon: () => <LinkedinIcon className="size-5" />,
    link: '',
  },
  {
    icon: () => <Mail className="size-5" />,
    link: '',
  },
];
const Footer = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(166,198,85,0.8239889705882353)_30%,rgba(166,198,85,1)_75%)] pb-20 pt-[120px] px-4 sm:px-6 md:px-[120px] flex flex-col md:flex-row gap-10 sm:gap-14">
      <div className="flex md:items-start items-center md:text-start text-center flex-col md:flex-row">
        <img src={Logo} alt="logo" className="w-[149px] h-[104px] mr-4" />
        <p className="max-w-[420px] text-black-120">
          Your trusted source for innovative drip solutions Founded in 2016 by Rahul Dahad and Viraj
          Palod, SB Polygreen is your trusted source for innovative drip manufacturing solutions.
          Based in Nashik, Maharashtra, we've expanded our footprint across India and into
          international markets.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-semibold leading-[28.18px] text-left text-green-90 mb-6">
          Pages
        </h4>
        <div className="flex items-center gap-6 justify-center md:justify-start flex-wrap -ml-4">
          {pages.map((item) => (
            <Button variant="link" key={item.title}>
              {item.title}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-6 justify-center md:justify-start flex-wrap -ml-4">
          {socials.map((item, index) => (
            <Button variant="link" key={index}>
              {item.icon()}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-5 mb-4">
          <MapPin className="size-5 text-green-100" />{' '}
          <p>C-9/1, NICE Area, MIDC, Satpur, Nashik, Maharashtra, India.</p>
        </div>
        <div className="flex items-center gap-5 mb-4">
          <Phone className="size-5 text-green-100" />{' '}
          <p>
            Call-{' '}
            {['+919423967278', '+919960256777', '+919766933459'].map((item, index) => (
              <a href={`tel:${item}`}>
                {item} {index < 2 && ', '}
              </a>
            ))}
          </p>
        </div>
        <div className="flex items-center gap-5 mb-4">
          <Mail className="size-5 text-green-100" />
          <a href="mailto:sbpolygreen@gmail.com">sbpolygreen@gmail.com</a>
        </div>
        <p className="md:text-start text-center">SB Polygreen © 2023 ALL RIGHT RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;

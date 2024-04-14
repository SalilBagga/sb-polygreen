import { Button } from '@/components/ui/button';
import Logo from 'assets/Logo.webp';
import { PRODUCT_DATA } from 'features/Product/data';
import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Mail,
  Map,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import routes from 'routes';

const pages = [
  {
    title: 'Home',
    link: routes.home,
  },
  {
    title: 'Products',
    link: routes.productLink.replace(':productSlug', PRODUCT_DATA[0].slug),
  },
  {
    title: 'About',
    link: routes.aboutUs,
  },
];
const socials = [
  {
    icon: () => <Facebook className="size-5" />,
    link: 'https://www.facebook.com/profile.php?id=61556891302650',
  },
  {
    icon: () => <Instagram className="size-5" />,
    link: 'https://www.instagram.com/sb_polygreen?igsh=MXdreWJrNjMxdWR6Mg==',
  },
  {
    icon: () => <LinkedinIcon className="size-5" />,
    link: 'https://www.linkedin.com/in/rahul-dahad-075a3a75?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    icon: () => <Mail className="size-5" />,
    link: 'mailto:sbpolygreen@gmail.com',
  },
];
const Footer = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(166,198,85,0.8239889705882353)_30%,rgba(166,198,85,1)_75%)] pb-20 pt-[120px] px-4 sm:px-6 md:px-[120px] flex flex-col md:flex-row gap-10 sm:gap-14">
      <div className="flex md:items-start items-center md:text-start text-center flex-col md:flex-row">
        <img src={Logo} alt="logo" className="w-[149px] h-[104px] md:mr-4" />
        <p className="max-w-[420px] text-black-120">
          Your trusted source for innovative drip solutions Founded in 2016 by Rahul Dahad and Viraj
          Palod, SB Polygreen is your trusted source for innovative drip manufacturing solutions.
          Based in Nashik, Maharashtra, we've expanded our footprint across India and into
          international markets.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-semibold leading-[28.18px] md:text-left text-center text-green-90 mb-6">
          Pages
        </h4>
        <div className="flex items-center gap-6 justify-center md:justify-start flex-wrap -ml-4">
          {pages.map((item) => (
            <Button variant="link" asChild key={item.title}>
              <Link to={item.link}>{item.title}</Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-6 justify-center md:justify-start flex-wrap -ml-4">
          {socials.map((item, index) => (
            <Button variant="link" asChild key={index}>
              <a href={item.link} target="_blank">
                {item.icon()}
              </a>
            </Button>
          ))}
        </div>
        <div className="flex items-start gap-5 mb-4">
          <MapPin className="size-5 text-green-100 shrink-0" />{' '}
          <p>C-9/1, NICE Area, MIDC, Satpur, Nashik, Maharashtra, India.</p>
        </div>
        <div className="flex items-start gap-5 mb-4">
          <Phone className="size-5 text-green-100 shrink-0" />{' '}
          <p>
            Call-{' '}
            {['+919423967278', '+919960256777', '+919766933459'].map((item, index) => (
              <a href={`tel:${item}`}>
                {item} {index < 2 && ', '}
              </a>
            ))}
          </p>
        </div>
        <div className="flex items-start gap-5 mb-4">
          <Mail className="size-5 text-green-100 shrink-0" />
          <a href="mailto:sbpolygreen@gmail.com">sbpolygreen@gmail.com</a>
        </div>
        <p className="md:text-start text-center">SB Polygreen © 2023 ALL RIGHT RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;

import FlatDrip1 from 'assets/Products/FlatDrip/flat-drip-1.webp';
import FlatDrip2 from 'assets/Products/FlatDrip/flat-drip-2.webp';
import FlatDrip3 from 'assets/Products/FlatDrip/flat-drip-3.webp';
import RainPipe1 from 'assets/Products/RainPipe/rain-pipe-1.webp';
import RainPipe2 from 'assets/Products/RainPipe/rain-pipe-2.webp';
import RoundPipe from 'assets/Products/RoundPipe/round-pipe.webp';
import SubmainPipe1 from 'assets/Products/SubmainPipe/submain-pipe-1.webp';
import SubmainPipe2 from 'assets/Products/SubmainPipe/submain-pipe-2.webp';

export type SizeDetailsType = 'thickness' | 'length' | 'discharge' | 'lay-length';
export type ProductDataType = {
  slug: string;
  isHeroProduct?: boolean;
  name: string;
  moreInfo: string;
  images: string[];
  sizes: {
    name: string;
    details: { slug: SizeDetailsType; value: string }[];
  }[];
  description?: string[];
};

export const PRODUCT_DATA: ProductDataType[] = [
  {
    isHeroProduct: true,
    slug: 'flat-drip-pipe',
    name: 'Flat drip Pipe',
    moreInfo:
      'I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
    images: [FlatDrip1, FlatDrip2, FlatDrip3],
    sizes: [
      {
        name: '12 MM',
        details: [
          { slug: 'thickness', value: '0.2/0.3/0.4MM' },
          { slug: 'length', value: '1000 Meter' },
          { slug: 'discharge', value: '4 LPH' },
          { slug: 'lay-length', value: '40 Meter' },
        ],
      },
      {
        name: '16 MM',
        details: [
          { slug: 'thickness', value: '0.2/0.3/0.4MM' },
          { slug: 'length', value: '1000 Meter' },
          { slug: 'discharge', value: '4 LPH' },
          { slug: 'lay-length', value: '60 Meter' },
        ],
      },
      {
        name: '20 MM',
        details: [
          { slug: 'thickness', value: '0.2/0.3/0.4MM' },
          { slug: 'length', value: '1000 Meter' },
          { slug: 'discharge', value: '4 LPH' },
          { slug: 'lay-length', value: '100 Meter' },
        ],
      },
    ],
  },
  {
    slug: 'round-pipe',
    name: 'Round Pipe',
    moreInfo:
      'I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
    images: [RoundPipe],
    sizes: [
      {
        name: '12 MM',
        details: [
          { slug: 'thickness', value: '0.5/0.6/0.7MM' },
          { slug: 'length', value: '300 Meter' },
          { slug: 'discharge', value: '4 LPH' },
          { slug: 'lay-length', value: '40 Meter' },
        ],
      },
      {
        name: '16 MM',
        details: [
          { slug: 'thickness', value: '0.5/0.6/0.7MM' },
          { slug: 'length', value: '300 Meter' },
          { slug: 'discharge', value: '4 LPH' },
          { slug: 'lay-length', value: '60 Meter' },
        ],
      },
      {
        name: '20 MM',
        details: [
          { slug: 'thickness', value: '0.5/0.6/0.7MM' },
          { slug: 'length', value: '300 Meter' },
          { slug: 'discharge', value: '4 LPH' },
          { slug: 'lay-length', value: '100 Meter' },
        ],
      },
    ],
  },
  {
    isHeroProduct: true,
    slug: 'submain-pipe',
    name: 'Submain Pipe',
    moreInfo:
      'I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
    images: [SubmainPipe1, SubmainPipe2],
    sizes: [
      {
        name: '63 MM',
        details: [
          { slug: 'thickness', value: '1 MM' },
          { slug: 'length', value: '60 Meter' },
        ],
      },
      {
        name: '75 MM',
        details: [
          { slug: 'thickness', value: '1 MM' },
          { slug: 'length', value: '61 Meter' },
        ],
      },
    ],
  },
  {
    isHeroProduct: true,
    slug: 'rain-pipe',
    name: 'Rain Pipe',
    moreInfo:
      'I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
    images: [RainPipe1, RainPipe2],
    sizes: [
      {
        name: '40 MM',
        details: [
          { slug: 'thickness', value: '300 Micron' },
          { slug: 'length', value: '100 Meter' },
        ],
      },
      {
        name: '63 MM',
        details: [
          { slug: 'thickness', value: '350 Micron' },
          { slug: 'length', value: '100 Meter' },
        ],
      },
      {
        name: '75 MM',
        details: [
          { slug: 'thickness', value: '350 Micron' },
          { slug: 'length', value: '100 Meter' },
        ],
      },
    ],
  },
];

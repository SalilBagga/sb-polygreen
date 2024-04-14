import Pipe from 'assets/Products/pipe.webp';

export type ProductDataType = {
  slug: string;
  name: string;
  size: string[];
  images: string[];
  details: {
    name: string;
    value: string;
  }[];
  moreInfo: string;
};
export const PRODUCT_DATA: ProductDataType[] = [
  {
    slug: 'flat-drip-pipe',
    name: 'Flat drip pipe',
    size: ['63MM', '73MM'],
    images: [Pipe, Pipe, Pipe, Pipe, Pipe],
    details: [
      { name: 'Thickness', value: '1mm' },
      { name: 'Length', value: '61meter' },
    ],
    moreInfo:
      'I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
  },
  {
    slug: 'submain-pipe1',
    name: 'Submain Pipe1',
    size: ['1163MM', '1173MM'],
    images: [Pipe, Pipe, Pipe, Pipe, Pipe],
    details: [
      { name: 'Thickness', value: '1222mm' },
      { name: 'Length', value: '62221meter' },
    ],
    moreInfo:
      'I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
  },
];

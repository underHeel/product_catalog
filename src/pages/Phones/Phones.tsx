import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Phone } from '../../types/Phone';

const Product: Phone = {
  id: 'apple-iphone-11-128gb-black',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'data:image/jpeg;base64,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',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const Phones: React.FC = () => {
  return <ProductCard phone={Product} />;
};

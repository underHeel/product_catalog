import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import './styles/utils/main.scss';
import { IconButton } from './components/ui/buttons/IconButton';
import { ArrowUpIcon } from './components/ui/icons/ArrowUpIcon';
import { Button } from './components/ui/buttons/Button';
import { ArrowLeftIcon } from './components/ui/icons/ArrowLeftIcon';
import { ProductCard } from './components/ProductCard';

const phones = [
  {
    id: '1',
    category: 'phones',
    phoneId: '21',
    itemId: '1',
    name: 'Iphone 13 Mini',
    fullPrice: 899,
    price: 699,
    screen: '9" OLED',
    capacity: '5000 mAh',
    color: 'black',
    ram: '64gb',
    year: 2022,
    image:
      'data:image/png;base64,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',
  },
  {
    id: '1',
    category: 'phones',
    phoneId: '21',
    itemId: '1',
    name: 'Iphone 13 Pro Titanium Black',
    fullPrice: 899,
    price: 699,
    screen: '9" OLED',
    capacity: '5000 mAh',
    color: 'black',
    ram: '64gb',
    year: 2022,
    image:
      'data:image/png;base64,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',
  },
  {
    id: '1',
    category: 'phones',
    phoneId: '21',
    itemId: '1',
    name: 'Iphone X Red',
    fullPrice: 499,
    price: 399,
    screen: '9" OLED',
    capacity: '5000 mAh',
    color: 'black',
    ram: '64gb',
    year: 2022,
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAFCCAMAAAAzJUSUAAAAnFBMVEUzMzMAAAD///8kJCQTExMICQve2cgQEBCGf3bRy7wWFhaPiIMEBAQLCwuzrJ4wMDB9dWuLg3fW0cIoKCjDva7m5eTX1dQhISBpX1eUkYZhV02KhH+VjYFuZVzTzr/AvbuyrqtZV1HOzMq9uat7eXA+PTmopZnPy8K9uLGim453bWNDQj6XkY2loZ2BeG66ta4ZISoVGyPx8O7g3NEV8971AAAFqklEQVR4nO3aeXOaQBzGcddwBAoeCAoeMQrSipim7ft/b/3hkbON2Wcmus48378yHWf9yO5yTVvt9yXL+2397eu7nRz+qLf3y+QfkNbbfxjWaTXtxN4ZWpd3h7/izrSX1sMTuPms14m8sli0Rv5nCtWHhZ8aZNRaFKUXdXqz+Qe4Zdr3omwlo9rhZ3M/6NOD2PKVqyzy+unyf7hJFUeFUjLox8fjK5IfqVQRxdXkn7gkXTuZUlZ4/PD5OnylpVTmrNPkPW44zqPNnuYPuq0z1x34e94mysfDt7jhOI4DW+zBzblhx24CmTdbxfGT7oBLxnGuLJn20aVoTSNZ8JbK43HyCpfmcTOlod58dv0w+LDQ1xwwbKY2ztOXuMk6smVZWlojNT/0dJpTYclWtKP15Bm37Dkb21X+F9i0db5y7Y3TWz7hUi9TlnL1RumeUgVydpU1rjS3viuUzJsdcfNppKxA6Y1x8sAFoayURqe7x1RgqWg6P+BmXqFcNdAcwzqBC8PHx8dQzpuaK7k1EEyxO3SCG/Yd5WsPIYf/JO7Xoy04zeXSjOwrpz/c4eo8E6v2RcE/Oa3uL7c5cpr7rFnNrsryeoebOSs30P55cvRPHrqwsWmvFzl0gbtyZg0u6d/J/gAuWifvXYLdZg31R74R0F0/Edy8LJFZ/cS5ZB80sqvKci64bVzIDOiP0Dq97BSw4HbJcijireBqb2EH2Bhyp3Mi8N7LD+yFVwtuIvvhsjcj7xspdxVNBHfrjCzzcNbIud3hbGizfmWyXUOTcTZxSMShXQeu6oQm4sJO1eBKM3FlZfq0EqcZcWjEoRGHRhwacWjEoRGHRhwacWjEoRGHdsT9eTAY971HnF7EoV0F7gdxml0F7qfJuHuTcdvKYNxvk6+tRt+VEKcbcWjEoRGHdhVXCKMfDY3GGf0MQZxuxKERh3YVz63E6UYcmvm4h8TgFzkPf8zGmfuWyWhc77vBr8AENzT5yJn7aEgcEHFoxKEdcea+jjAdZ+7TV+8HcdoRh0Yc2lXgzH1uJQ7oCnA/idNuj7s3+F2J6Thz35VUgjP2XUm1NfhFjuDMffp6+G0wzvT/gECcbsShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShEYdGHBpxaMShPeGqMjQRF5ZVg+uYietUpk8rcZoRh0YcWnMqOeBGlhpdmvO6kbJGO9zEWbnm4dxVNBFc7S3swL8053V+YC+8WnDbuFBheGnO68JQFfFWcPOyVK7qXtrzsq6AynIuuKR/pwzbrrJZ1V0/EVx7JjsicC8NeplwVs6s3eDqPDNrXptZzfJ6hxv2HeUr69Kk51zhOP3hDteeeYVYB5c2HRsIpvBkVne4+TRSVqAujTqmAktF0/kBJ4cuk/1hyJ5whZLtDtwet+w5G1tm+tKuJl+59sbpLZ9w7ck6st3QhE1hqdC1o/Wk/Yxrp3ksdykqvPAJpSsES8V52n6JS8ZxrlxXXfb2ZKQaQx6Pk1e49nAcx7bcdargYheym0DJDbAdx+Nh+zVOdHm0aaZWKX9w9tntDnz5YpnSTZQ/2Z5x7SRdO5na8+Rz7hk7fKXMW+as06T9Hid7toqjopn2/YfPWtgs+CKKq8kL0Etce5n2vShbyWdtOzxjti1fucoir58u2//DyZVs1utEXlksWiP/bI1ai6L0ok5vNn+teYOTjVGn1bQTe/vuyrV3huJO1kvr4VvLO1yzNZb32/rbvsntt6+v3t4vk39A/gKPCbwPwjsV2wAAAABJRU5ErkJggg==',
  },
];

const App: React.FC = () => {
  return (
    <div>
      {phones.map((item) => {
        return <ProductCard phone={item} />;
      })}
      <NavBar />
      <IconButton onClick={() => {}}>
        <ArrowUpIcon />
      </IconButton>
      <Button onClick={() => {}} variant="text">
        <ArrowLeftIcon />
        Button
      </Button>
      <Outlet />
    </div>
  );
};

export default App;

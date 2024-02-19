import { Phone } from 'src/types/Phone';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  return <div> {phone.name} </div>;
};

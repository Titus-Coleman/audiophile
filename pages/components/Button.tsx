import Link from 'next/link';

interface Props {
  link: string;
}

export const ClearButton = ({ link }: Props) => {
  return (
    <Link href={{ pathname: link }}>
      <button className="h-12 w-40 border border-solid border-black text-sub-title font-medium hover:bg-black hover:text-white">
        SEE PRODUCT
      </button>
    </Link>
  );
};

export const BlackButton = ({ link }: Props) => {
  return (
    <Link href={{ pathname: link }}>
      <button className="h-12 w-40 bg-black font-medium text-sub-title hover:bg-[#4C4C4C] z-40">
        SEE PRODUCT
      </button>
    </Link>
  );
};

export const AddToCartButton = ({ link }: Props) => {
  return (
    <Link href={{ pathname: link }}>
      <button className="w-40 h-12 text-sub-title font-medium text-white bg-caramel hover:bg-nude">
        ADD TO CART
      </button>
    </Link>
  );
};

export default function TanButton({ link }: Props) {
  return (
    <Link href={{ pathname: link }}>
      <button className="w-40 h-12 text-sub-title font-medium text-white bg-caramel hover:bg-nude">
        SEE PRODUCT
      </button>
    </Link>
  );
}

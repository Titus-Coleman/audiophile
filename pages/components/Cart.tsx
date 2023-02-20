import Image from 'next/image';
import { useRef } from 'react';

import { useStateContext } from '@/Context/StateContext';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import {
  AiOutlineCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';

function Cart() {
  const cartRef = useRef<any>();
  const { totalQuantities, setShowCart } = useStateContext();

  return (
    <div
      className="bg-white rounded-xl mobile:w-[370px] absolute z-10 top-20 left-3/4"
      ref={cartRef}
    >
      <div className="h-auto p-8">
        <button type="button" onClick={() => setShowCart(false)}>
          showcart
        </button>
        <div className=" grid grid-cols-1 gap-6">
          <div className="inline-flex justify-between">
            <h6 className="text-black font-semibold">
              CART ({totalQuantities} items)
            </h6>
            <span className="text-black/50">Remove all</span>
          </div>
          <div id="items" className="grid grid-cols-1 gap-2">
            <div className="inline-flex items-center justify-between">
              <picture className="relative w-16 h-16 overflow-hidden rounded-xl">
                <Image
                  className="absolute"
                  src="/assets/cart/image-xx59-headphones.jpg"
                  alt=""
                  fill
                />
              </picture>
              <div className="grid grid-cols-1">
                <p className="text-black">XX99 MKII</p>
                <p className="text-black/50">$2,999</p>
              </div>
              <div className="bg-grey h-12 w-24 p-4 inline-flex justify-between">
                <span className="hover:text-black">
                  <AiOutlineMinus />
                </span>
                <span className="text-black">1</span>
                <span className="hover:text-black">
                  <AiOutlinePlus />
                </span>
              </div>
              <IconContext.Provider value={{ color: 'red' }}>
                <span>
                  <AiOutlineCloseCircle />
                </span>
              </IconContext.Provider>
            </div>
          </div>
          <div className="inline-flex justify-between">
            <span className="text-black/50">TOTAL</span>
            <span className="text-black">$5,396</span>
          </div>
          <div>
            <Link href={'/'}>
              <button className="w-full h-12 text-sub-title font-medium text-white bg-caramel hover:bg-nude">
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

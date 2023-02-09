import { useStateContext } from '@/Context/StateContext';
import CategoryLayout from '@/layout/CategoryLayout';
import { Product } from '@/typings';
import { fetchProducts } from '@/utils/fetchProducts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Key } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import TanButton from '../components/Button';

const Item = (props: { item: Product }) => {
  const { increaseQty, decreaseQty, qty, onAdd }: any = useStateContext();

  return (
    <CategoryLayout>
      <section className="bg-white">
        <div className=" mobile:mx-4 tablet:mx-8 desktop:mx-20">
          <div className="py-6">
            <Link className="font-medium mt-8" href={'/headphones'}>
              Go Back
            </Link>
          </div>
          {/* Product Info Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

          <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 tablet:gap-20 items-center tablet:mb-20 ">
            <picture className="rounded-xl overflow-hidden object-fit">
              <img
                className="h-auto min-w-full"
                // srcSet="{prop} 1024w,
                // /assets/product-xx99-mark-one-headphones/tablet/image-product.jpg 500w,
                // /assets/product-xx99-mark-one-headphones/mobile/image-product.jpg 320w"
                src={props.item.desktop_image.secure_url}
                alt={props.item.alt_image_text}
              />
            </picture>
            <div className="flex flex-col space-y-6 mb-20">
              <span className="mt-8 text-overline text-caramel uppercase mobile:text-left">
                {props.item?.subtitle}
              </span>
              <h4 className="text-2xl font-medium mobile:text-left tablet:text-left tablet:text-3xl text-black">
                {props.item?.product_name}
              </h4>
              <p className="mb-6 mobile:text-left text-black/50">
                {props.item?.summary}
              </p>
              <p className="mobile:text-left text-black text-md font-medium">
                ${props.item?.price}
              </p>
              <div className="inline-flex gap-4 mobile:items-left">
                <div className="bg-grey h-12 w-40 p-4 inline-flex justify-between">
                  <span className="hover:text-black" onClick={decreaseQty}>
                    <AiOutlineMinus />
                  </span>
                  <span className="text-black">{qty}</span>
                  <span className="hover:text-black" onClick={increaseQty}>
                    <AiOutlinePlus />
                  </span>
                </div>
                {/* IS A UNIQUE KEY NEEDED??? */}
                <button
                  type="button"
                  className="w-40 h-12 text-sub-title font-medium text-white bg-caramel hover:bg-nude"
                  onClick={() => onAdd(props.item, qty)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          {/* Features Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="grid desktop:grid-cols-2 desktop:gap-20 ">
            <div className="space-y-6 mb-20 tablet:items-left">
              <h4 className="text-2xl uppercase font-medium tablet:text-3xl  text-black text-left ">
                Features
              </h4>
              <p className="mobile:text-left mb-6 text-black/50">
                {props.item?.features}
              </p>
            </div>

            {/* "In the Box" Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <div className="grid tablet:grid-cols-2 mobile:gap-6 tablet:gap-20 desktop:gap-0 desktop:grid-cols-1 mb-20 desktop:ml-40">
              <h4 className="text-2xl font-medium mobile:text-left tablet:text-3xl  text-black uppercase">
                in the box
              </h4>
              <div className="grid gap-3 content-start">
                {props.item.included_items.map(
                  (i: { _key: Key; amount: number; title: string }) => {
                    return (
                      <div key={i._key} className="grid grid-cols-two">
                        <p className="text-caramel font-bold">{i.amount}x</p>
                        <p className="text-black/50 ">{i.title}</p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          {/* Gallery Photos Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="grid mobile:grid-rows-4 tablet:grid-rows-2 tablet:grid-cols-2 gap-5 pb-20">
            <picture className="overflow-hidden rounded-xl">
              <img
                className="min-h-full min-w-full"
                src={props.item.gallery1.secure_url}
                alt=""
              />
            </picture>
            <picture className="overflow-hidden rounded-xl">
              <img
                className="min-h-full min-w-full"
                src={props.item.gallery2.secure_url}
                alt=""
              />
            </picture>
            <picture className="overflow-hidden rounded-xl row-span-2 tablet:col-start-2 tablet:row-start-1 object-center">
              <img
                className="min-h-full min-w-full"
                src={props.item.gallery3.secure_url}
                alt=""
              />
            </picture>
          </div>
          <div className="py-6">
            <h4 className="text-2xl font-medium text-center tablet:text-3xl  text-black uppercase mb-6">
              You may also like
            </h4>
            <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 mobile:gap-8 tablet:gap-2 ">
              <div className="flex flex-col">
                <picture className="rounded-xl overflow-hidden object-fit mb-4">
                  <img
                    className="h-auto min-w-full"
                    src="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610472/audiophile/product-xx99-mark-one-headphones/desktop/image-category-page-preview_q8ghnk.jpg"
                    alt=""
                  />
                </picture>
                <div className="mx-auto text-center">
                  <h5 className="mb-4">XX99 Mark I</h5>
                  <TanButton link={'/'} uniqueKey={''} />
                </div>
              </div>
              <div className="flex flex-col">
                <picture className="rounded-xl overflow-hidden object-fit mb-4">
                  <img
                    className="h-auto min-w-full"
                    src="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610471/audiophile/product-xx59-headphones/desktop/image-category-page-preview_dao4fx.jpg"
                    alt=""
                  />
                </picture>
                <div className="mx-auto text-center">
                  <h5 className="mb-4">XX59</h5>
                  <TanButton link={'/'} uniqueKey={''} />
                </div>
              </div>
              <div className="flex flex-col">
                <picture className="rounded-xl overflow-hidden object-fit mb-4">
                  <img
                    className="h-auto min-w-full"
                    src="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610465/audiophile/product-zx9-speaker/desktop/image-category-page-preview_qksj2t.jpg"
                    alt=""
                  />
                </picture>
                <div className="mx-auto text-center">
                  <h5 className="mb-4">ZX9 Speaker</h5>
                  <TanButton link={'/'} uniqueKey={''} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CategoryLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const itemID = context.params?.device;
  const products: Product[] = await fetchProducts();
  const headphone = products.find((item) => itemID === item.product_id);

  return {
    props: {
      item: headphone,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await fetchProducts();
  const path = products
    .filter((val) => {
      return val.category === 'Headphones';
    })
    .map((item) => ({ params: { device: item.product_id } }));

  return {
    paths: path,
    fallback: false,
  };
};

export default Item;

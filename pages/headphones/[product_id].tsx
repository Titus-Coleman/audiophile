import CategoryLayout from '@/layout/CategoryLayout';
import Link from 'next/link';
import TanButton, { AddToCartButton } from '../components/Button';

const Item = () => {
  return (
    <CategoryLayout>
      <section className="bg-white">
        <div className=" mobile:mx-4 tablet:mx-12 desktop:mx-20">
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
                srcSet="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg 1024w,
                /assets/product-xx99-mark-one-headphones/tablet/image-product.jpg 500w,
                /assets/product-xx99-mark-one-headphones/mobile/image-product.jpg 320w"
                src="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
                alt="alt text"
              />
            </picture>
            <div className="flex flex-col space-y-6 mb-20">
              <span className="mt-8 text-overline text-caramel uppercase mobile:text-left">
                NEW PRODUCT
              </span>
              <h4 className="text-2xl font-medium mobile:text-left tablet:text-left tablet:text-3xl text-black">
                XX99 Mark II Heaphones
              </h4>
              <p className="mb-6 mobile:text-left text-black/50">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <p className="mobile:text-left text-black text-md font-medium">
                $2,999
              </p>
              <div className="inline-flex gap-4 mobile:items-left">
                <div className="bg-grey h-12 w-40 p-4 flex">1</div>
                <AddToCartButton link="/" />
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
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you’re taking a business call or just
                in your own personal space, the auto on/off and pause features
                ensure that you’ll never miss a beat. The advanced Active Noise
                Cancellation with built-in equalizer allow you to experience
                your audio world on your terms. It lets you enjoy your audio in
                peace, but quickly interact with your surroundings when you need
                to. Combined with Bluetooth 5. 0 compliant connectivity and 17
                hourbattery life, the XX99 Mark II headphones gives you superior
                sound, cutting-edge technology, and a modern design aesthetic.
              </p>
            </div>

            {/* "In the Box" Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <div className="grid tablet:grid-cols-2 mobile:gap-6 tablet:gap-20 desktop:gap-0 desktop:grid-cols-1 mb-20 desktop:ml-40">
              <h4 className="text-2xl font-medium mobile:text-left tablet:text-3xl  text-black uppercase">
                in the box
              </h4>
              <div className="grid gap-3 content-start">
                <div className="grid grid-cols-two">
                  <p className="text-caramel font-bold">1x</p>
                  <p className="text-black/50 ">Headphone Unit</p>
                </div>
                <div className="grid grid-cols-two">
                  <p className="text-caramel font-bold">1x</p>
                  <p className="text-black/50">Speaker Unit</p>
                </div>
                <div className="grid grid-cols-two">
                  <p className="text-caramel font-bold">2x</p>
                  <p className="text-black/50">User Manual</p>
                </div>
                <div className="grid grid-cols-two">
                  <p className="text-caramel font-bold">1x</p>
                  <p className="text-black/50">7.5m Optical Cable</p>
                </div>
                <div className="grid grid-cols-two">
                  <p className="text-caramel font-bold">4x</p>
                  <p className="text-black/50">Headphone Unit</p>
                </div>
                <div className="grid grid-cols-two">
                  <p className="text-caramel font-bold">1x</p>
                  <p className="text-black/50">Headphone Unit</p>
                </div>
              </div>
            </div>
          </div>
          {/* Gallery Photos Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="grid mobile:grid-rows-4 tablet:grid-rows-2 tablet:grid-cols-2 gap-5 pb-20">
            <picture className="overflow-hidden rounded-xl">
              <img
                className="min-h-full min-w-full"
                src="/assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
                alt=""
              />
            </picture>
            <picture className="overflow-hidden rounded-xl">
              <img
                className="min-h-full min-w-full"
                src="/assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
                alt=""
              />
            </picture>
            <picture className="overflow-hidden rounded-xl row-span-2 tablet:col-start-2 tablet:row-start-1">
              <img
                className="min-h-full min-w-full"
                src="/assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
                alt=""
              />
            </picture>
          </div>

          <h4>You may also like</h4>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <picture className="rounded-xl overflow-hidden object-fit h-8 w-auto">
                <img
                  className=""
                  src="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610472/audiophile/product-xx99-mark-one-headphones/mobile/image-category-page-preview_ebvtxy.jpg"
                  alt=""
                />
              </picture>
              <h5>XX99 Mark I</h5>
              <TanButton link={'/'} />
            </div>
            <div>
              <picture className="rounded-xl overflow-hidden object-fit">
                <img
                  className="h-auto min-w-full"
                  src="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610471/audiophile/product-xx59-headphones/mobile/image-category-page-preview_rrpumh.jpg"
                  alt=""
                />
              </picture>
              <h5>XX59</h5>
              <TanButton link={'/'} />
            </div>
            <div>
              <picture className="rounded-xl overflow-hidden object-fit h-8 w-auto">
                <img
                  className=""
                  src="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610465/audiophile/product-zx9-speaker/desktop/image-category-page-preview_qksj2t.jpg"
                  alt=""
                />
              </picture>
              <h5>ZX9 Speaker</h5>
              <TanButton link={'/'} />
            </div>
          </div>
        </div>
      </section>
    </CategoryLayout>
  );
};

export default Item;

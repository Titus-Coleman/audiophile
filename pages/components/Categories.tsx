import Image from 'next/image';
import Link from 'next/link';

function Categories() {
  return (
    <section className="py-28 bg-white place-content-center">
      <div className="grid grid-flow-row gap-20 tablet:grid-flow-col tablet:gap-2 mx-6">
        <div className="bg-grey w-auto h-[165px] rounded-xl">
          <figure className="relative">
            <Image
              className={'absolute -top-14 inset-x-16'}
              src={
                '/assets/shared/desktop/image-category-thumbnail-headphones.png'
              }
              alt={'headphones'}
              width={150}
              height={120}
            />
          </figure>
          <div className="flex flex-col items-center pt-20 m-auto ">
            <h6 className="text-black mb-3">HEADPHONES</h6>
            <Link className="inline-flex items-center" href={'/headphones'}>
              SHOP
              <svg
                className="ml-2"
                width="8"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="bg-grey w-auto h-[165px] rounded-xl">
          <figure className="relative">
            <Image
              className={'absolute -top-14 inset-x-12'}
              src={
                '/assets/shared/desktop/image-category-thumbnail-speakers.png'
              }
              alt={'speakers'}
              width={150}
              height={120}
            />
          </figure>
          <div className="flex flex-col items-center pt-20 m-auto ">
            <h6 className="text-black mb-3">SPEAKERS</h6>
            <Link className="inline-flex items-center" href={'/speakers'}>
              SHOP
              <svg
                className="ml-2"
                width="8"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="bg-grey w-auto h-[165px] rounded-xl">
          <figure className="relative">
            <Image
              className={'absolute -top-14 inset-x-14'}
              src={
                '/assets/shared/desktop/image-category-thumbnail-earphones.png'
              }
              alt={'earphones'}
              width={150}
              height={120}
            />
          </figure>
          <div className="flex flex-col items-center pt-20 m-auto ">
            <h6 className="text-black mb-3">EARPHONES</h6>
            <Link className="inline-flex items-center" href={'/earphones'}>
              SHOP
              <svg
                className="ml-2"
                width="8"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;

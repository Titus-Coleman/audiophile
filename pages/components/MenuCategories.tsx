import Image from 'next/image';
import Link from 'next/link';

function MenuCategories() {
  return (
    <section className="py-14 z-50 place-content-center absolute top-14 -left-2 bg-grey">
      <div className="grid grid-row-3 tablet:grid-cols-3 tablet:gap-2 desktop:mx-20 mobile:mx-4 tablet:mx-8">
        <div className="grid grid-cols-2 w-72 rounded-xl items-center gap-8">
          <figure className="relative mx-auto w-32 h-32 object-cover">
            <Image
              className={'absolute'}
              src={
                '/assets/shared/desktop/image-category-thumbnail-headphones.png'
              }
              alt={'headphones'}
              fill
            />
          </figure>
          <div className="flex flex-col items-center mx-auto -mt-12">
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
        <div className="grid grid-cols-2 w-72 rounded-xl items-center gap-8">
          <figure className="relative mx-auto w-32 h-32 object-cover">
            <Image
              className={'absolute'}
              src={
                '/assets/shared/desktop/image-category-thumbnail-speakers.png'
              }
              alt={'speakers'}
              fill
            />
          </figure>
          <div className="flex flex-col items-center mx-auto -mt-12">
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
        <div className="grid grid-cols-2 w-72 rounded-xl items-center gap-8">
          <figure className="relative mx-auto w-32 h-32 object-cover">
            <Image
              className={'absolute'}
              src={
                '/assets/shared/desktop/image-category-thumbnail-earphones.png'
              }
              alt={'earphones'}
              fill
            />
          </figure>
          <div className="flex flex-col items-center mx-auto -mt-12">
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

export default MenuCategories;

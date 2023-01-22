import Image from 'next/image';
import Link from 'next/link';

function Categories() {
  return (
    <section className="px-6 grid grid-flow-row gap-24 py-32 bg-white place-content-center">
      <div className="bg-grey w-80 h-40 rounded-xl">
        <figure className="relative">
          <Image
            className={'absolute -top-14 left-20'}
            src={
              '/assets/shared/desktop/image-category-thumbnail-headphones.png'
            }
            alt={'headphones'}
            width={150}
            height={120}
          />
        </figure>
        <div className="items-center pt-20">
          <h6 className="text-black pb-4">HEADPHONES</h6>
          <Link href={'/headphones'}>SHOP</Link>
        </div>
      </div>
      <div>
        <picture>
          {/* <Image
            src={'/assets/shared/desktop/image-category-thumbnail-speakers.png'}
            alt={'speakers'}
          /> */}
        </picture>
        <h6>SPEAKERS</h6>
        <Link href={'/speakers'}>SHOP</Link>
      </div>
      <div>
        <picture>
          {/* <Image
            src={
              '/assets/shared/desktop/image-category-thumbnail-earphones.png'
            }
            alt={'earphones'}
          /> */}
        </picture>
        <h6>EARPHONES</h6>
        <Link href={'/earphones'}>SHOP</Link>
      </div>
    </section>
  );
}

export default Categories;

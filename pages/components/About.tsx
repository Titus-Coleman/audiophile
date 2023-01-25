import Image from 'next/image';

export default function About() {
  return (
    <section className="grid desktop:grid-cols-2 gap-6 bg-white w-screen pt-32 pb-32 px-6 ">
      <figure className="relative overflow-hidden rounded-lg h-72 w-auto aspect-auto object-fit desktop:w-[620px] desktop:h-[588px] desktop:mx-16 grid-flow-col-dense">
        <Image
          className={'absolute'}
          src={'/assets/shared/desktop/image-best-gear.jpg'}
          alt={'best gear'}
          fill
        />
      </figure>
      <div className="desktop:place-items-start desktop:ml-0 desktop:mr-48 tablet:mx-12 desktop:mx-16">
        <h5 className="text-xl tablet:text-3xl text-black uppercase font-semibold text-left pt-8 ">
          Bringing you the <span className="text-caramel">best</span> audio gear
        </h5>
        <p className="pt-8 text-center desktop:text-left text-light-black/75 justify-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

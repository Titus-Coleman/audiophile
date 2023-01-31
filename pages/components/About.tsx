import Image from 'next/image';

export default function About() {
  return (
    <section className=" bg-white w-screen pt-32 pb-32">
      <div className="grid desktop:grid-cols-2 gap-6 desktop:mx-20 tablet:mx-8 mobile:mx-4">
        <figure className="relative overflow-hidden rounded-lg h-72 w-auto object-cover desktop:h-[588px] grid-flow-col-dense">
          <Image
            className={'absolute'}
            src={'/assets/shared/tablet/image-best-gear.jpg'}
            alt={'best gear'}
            fill
          />
        </figure>
        <div className="desktop:place-items-start tablet:mx-12 desktop:px-16">
          <h5 className="text-xl tablet:text-3xl text-black uppercase font-semibold text-left pt-8 mobile:text-center ">
            Bringing you the <span className="text-caramel">best</span> audio
            gear
          </h5>
          <p className="pt-8 text-center desktop:text-left text-light-black/75 justify-center">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}

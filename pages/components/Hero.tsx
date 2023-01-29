import TanButton from './Button';

function Hero() {
  return (
    <section className="w-screen mobile:bg-hero desktop:bg-desktopHero bg-bottom bg-cover bg-no-repeat relative overflow-hidden py-8 desktop:h-[640px] tablet:bg-tabletHero mobile:h-[500px] tablet:h-[680px]">
      <div className="flex flex-col items-center text-white z-20 desktop:items-start desktop:mx-20 desktop:px-2 desktop:w-96 tablet:mx-52">
        <h3 className="text-overline mb-4 mt-16 text-grey/60">NEW PRODUCT</h3>
        <h2 className="text-3xl text-center uppercase mb-6 font-semibold desktop:text-left tablet:text-4xl">
          XX99 Mark II Headphones
        </h2>
        <p className="text-center mobile:mx-4 desktop:text-left mb-8">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <TanButton link={'/'} />
      </div>
    </section>
  );
}

export default Hero;

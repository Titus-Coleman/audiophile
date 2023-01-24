import Link from 'next/link';

function Hero() {
  return (
    <section className="w-screen bg-hero bg-bottom bg-cover bg-no-repeat relative overflow-hidden py-8">
      <div className="flex flex-col items-center mx-8 text-white z-20">
        <h3 className="text-overline mb-4 mt-16 text-grey/60">NEW PRODUCT</h3>
        <h2 className="text-3xl text-center uppercase mb-6 font-semibold">
          XX99 Mark II Headphones
        </h2>
        <p className="text-center ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link href={'/'}>
          <button className="w-40 h-12 text-sub-title font-bold text-white bg-caramel mt-8 mb-20">
            SEE PRODUCT
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
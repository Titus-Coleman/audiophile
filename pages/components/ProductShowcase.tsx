import Image from 'next/image';
import Link from 'next/link';

function ProductShowcase() {
  return (
    <div className="flex flex-col px-6 bg-white gap-6">
      <div className="bg-caramel text-white w-auto h-[600px] rounded-xl ">
        <div className="flex flex-col items-center mx-6">
          <div className="w-40 h-48 relative m-10 object-cover">
            <Image
              className="absolute z-40"
              src={'/assets/home/desktop/image-speaker-zx9.png'}
              alt={'ZX9 Speaker'}
              fill
            />
            <svg
              className="absolute scale-75 -inset-96"
              width="944"
              height="944"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".402">
                <circle cx="472" cy="472" r="235.5" />
                <circle cx="472" cy="472" r="270.5" />
                <circle cx="472" cy="472" r="471.5" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-3xl text-center font-semibold">ZX9 SPEAKER</h3>
            <p className="text-center text-body">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href={'/'}>
              <button className="h-12 w-40 bg-black font-semibold">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-black w-auto h-80 rounded-xl relative overflow-hidden">
        <div className="absolute top-20 z-10 py-6 px-6 space-y-6">
          <h3 className="text-xl text-center font-semibold">ZX7 SPEAKER</h3>
          <Link href={'/'}>
            <button className="h-12 w-40 border border-solid border-black font-medium">
              SEE PRODUCT
            </button>
          </Link>
        </div>
        <div className="responsive object-cover">
          <Image
            className="absolute"
            src={'/assets/home/mobile/image-speaker-zx7.jpg'}
            alt={'ZX7 Speaker'}
            fill
          />
        </div>
      </div>
      <div className="grid grid-flow-row tablet:grid-flow-col tablet:auto-cols-fr gap-6">
        <div className="relative overflow-hidden rounded-xl h-52 w-auto">
          <Image
            className="absolute"
            src={'/assets/home/desktop/image-earphones-yx1.jpg'}
            alt={'YX1 Earphones'}
            fill
          />
        </div>
        <div className="h-52 w-auto bg-grey/80 py-12 px-6 text-black rounded-xl">
          <h3 className="text-xl font-semibold mb-8">YX1 EARPHONES</h3>
          <Link href={'/'}>
            <button className="h-12 w-40 border border-solid border-black font-medium">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;

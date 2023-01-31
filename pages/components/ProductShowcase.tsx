import Image from 'next/image';
import { BlackButton, ClearButton } from './Button';

function ProductShowcase() {
  return (
    <div className="flex flex-col bg-white gap-6">
      <div className="bg-caramel bg-circles bg-bottom desktop:bg-left bg-no-repeat text-white w-auto h-[600px] rounded-xl desktop:mx-20 tablet:mx-8 mobile:mx-4">
        <div className="grid  mobile:grid-col-1  mobile:mx-6 tablet:mx-56 desktop:grid-cols-2 desktop:mt-40 desktop:gap-12 gap-8">
          <div className="w-40 h-48 relative justify-self-center object-cover mt-12 desktop:row-span-4">
            <Image
              className="absolute"
              src={'/assets/home/desktop/image-speaker-zx9.png'}
              alt={'ZX9 Speaker'}
              fill
            />
            {/* <svg
              className="absolute scale-75 -inset-96 z-0"
              width="944"
              height="944"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".402">
                <circle cx="472" cy="472" r="235.5" />
                <circle cx="472" cy="472" r="270.5" />
                <circle cx="472" cy="472" r="471.5" />
              </g>
            </svg> */}
          </div>

          <h3 className="text-3xl tablet:text-4xl font-semibold text-center desktop:col-start-2 desktop:text-left ">
            ZX9 SPEAKER
          </h3>
          <p className="text-body text-center desktop:text-left desktop:col-start-2">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div className="mx-auto desktop:col-start-2 desktop:mx-0">
            <BlackButton link={'/'} />
          </div>
        </div>
      </div>
      <div className=" text-black w-auto h-80 rounded-xl relative overflow-hidden desktop:mx-20 tablet:mx-8 mobile:mx-4">
        <div className="absolute top-20 z-10 py-6 px-6 space-y-6">
          <h3 className="text-xl text-center font-semibold mb-6">
            ZX7 SPEAKER
          </h3>
          <ClearButton link={'/'} />
        </div>
        <div className="responsive object-cover">
          <Image
            className="absolute"
            src={'/assets/home/desktop/image-speaker-zx7.jpg'}
            alt={'ZX7 Speaker'}
            fill
          />
        </div>
      </div>
      <div className="grid grid-flow-row tablet:grid-flow-col tablet:auto-cols-fr gap-6 desktop:mx-20 tablet:mx-8 mobile:mx-4">
        <div className="relative overflow-hidden rounded-xl h-52 w-auto desktop:h-80">
          <Image
            className="absolute"
            src={'/assets/home/desktop/image-earphones-yx1.jpg'}
            alt={'YX1 Earphones'}
            fill
          />
        </div>
        <div className="h-52 desktop:h-80 w-auto bg-grey/80 py-12 px-6 text-black rounded-xl">
          <h3 className="text-xl font-semibold mb-8">YX1 EARPHONES</h3>
          <ClearButton link={'http://google.com'} />
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;

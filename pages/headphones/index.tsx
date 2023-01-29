import CategoryLayout from '@/layout/CategoryLayout';
import TanButton from '../components/Button';

function index() {
  return (
    <CategoryLayout>
      <header className="flex h-24 bg-black text-white">
        <h4 className="m-auto justify-center text-xl font-medium">
          HEADPHONES
        </h4>
      </header>
      <section className="bg-white">
        <div
          className="grid text-black items-center mx-6
        pt-6 gap-8"
        >
          <picture className="rounded-xl overflow-hidden">
            {/* <source
              media="(min-width: 320px)"
              srcSet="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610466/audiophile/shared/mobile/image-xx99-mark-two-headphones_vgl6xj.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610469/audiophile/shared/tablet/image-xx99-mark-two-headphones_mwyzwb.jpg"
            />
            <source
              media="(min-width: 1440px)"
              srcSet="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610468/audiophile/shared/desktop/image-xx99-mark-two-headphones_dgjasl.jpg"
            /> */}
            <img
              src="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610468/audiophile/shared/desktop/image-xx99-mark-two-headphones_dgjasl.jpg"
              alt="XX99 Mark Two"
            />
          </picture>
          <div className="flex flex-col place-items-center space-y-6">
            <span className="text-overline text-caramel text-center">
              NEW PRODUCT
            </span>
            <h4 className="text-2xl font-medium text-center">
              XX99 Mark II Headphones
            </h4>
            <p className="text-center mb-6">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <TanButton link={'/'} />
          </div>
        </div>
      </section>
    </CategoryLayout>
  );
}

export default index;

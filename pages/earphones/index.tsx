import CategoryLayout from '@/layout/CategoryLayout';
import TanButton from '../components/Button';

function index() {
  return (
    <CategoryLayout>
      <header className="flex h-24 bg-black text-white">
        <h4 className="m-auto justify-center text-xl font-medium">EARPHONES</h4>
      </header>
      <section className="bg-white">
        <div className="grid">
          <picture>
            <img
              src="https://res.cloudinary.com/duniv0ekp/image/upload/v1674610468/audiophile/shared/desktop/image-xx99-mark-two-headphones_dgjasl.jpg"
              alt="XX99 Mark Two"
            />
          </picture>
          <div>
            <span>NEW PRODUCT</span>
            <h4>PRODUCT NAME</h4>
            <p>
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

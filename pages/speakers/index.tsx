import CategoryLayout from '@/layout/CategoryLayout';

import { Product } from '@/typings';
import { fetchProducts } from '@/utils/fetchProducts';
import { GetStaticProps } from 'next';
import TanButton from '../components/Button';

type Props = {
  products: Product[];
};

function index({ products }: Props) {
  const speakers = products.filter((val) => {
    return val.category === 'Speakers';
  });

  return (
    <CategoryLayout>
      <header className="flex h-24 bg-black text-white">
        <h4 className="m-auto justify-center text-xl font-medium uppercase">
          speakers
        </h4>
      </header>
      <section className="bg-white">
        {speakers?.map((item, i) => (
          <div
            key={i}
            className="grid text-black items-center mx-6
        pt-6 gap-8 desktop:grid-cols-2 desktop:mx-8"
          >
            <picture className="rounded-xl overflow-hidden object-fit">
              <img
                className="min-h-full min-w-full"
                src={item?.desktop_image.secure_url}
                alt={item?.alt_image_text}
              />
            </picture>
            <div className="flex flex-col place-items-center space-y-6">
              <span className="text-overline text-caramel text-center uppercase">
                {item?.subtitle}
              </span>
              <h4 className="text-2xl font-medium text-center tablet:mx-48 tablet:text-3xl desktop:mx-12">
                {item?.product_name}
              </h4>
              <p className="text-center mb-6 tablet:mx-20">{item.features}</p>
              <TanButton link={'/'} />
            </div>
          </div>
        ))}
      </section>
    </CategoryLayout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products: Product[] = await fetchProducts();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};

export default index;

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  secure_url: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Product extends SanityBody {
  _type: 'product';
  product_name: string;
  product_id: string;
  category: string;
  price: number;
  summary: string;
  features: string;
  subtitle: string;
  included_items: Array;
  desktop_image: Image;
  mobile_image: Image;
  tablet_image: Image;
  category_preview_img: Image;
  alt_image_text: string;
  gallery1: Image;
  gallery2: Image;
  gallery3: Image;
}

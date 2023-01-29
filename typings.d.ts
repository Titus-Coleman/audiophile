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
  included_item1: string;
  included_item1_qty: number;
  included_item2: string;
  included_item2_qty: number;
  included_item3: string;
  included_item3_qty: number;
  included_item4: string;
  included_item4_qty: number;
  included_item5: string;
  included_item_qty: number;
  subtitle: string;
  desktop_image: Image;
  mobile_image: Image;
  tablet_image: Image;
  category_preview_img: Image;
  alt_image_text: string;
  gallery1: Image;
  gallery2: Image;
  gallery3: Image;
}

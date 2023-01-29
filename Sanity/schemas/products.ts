import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'product_name',
      title: 'Product Name',
      description: 'Name of Product',
      type: 'string',
    }),
    defineField({
      name: 'product_id',
      title: 'Product ID',
      description: 'Product ID',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Product Category',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      description: 'Item Price',
      type: 'number',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description: 'Details of the product',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      description: 'Feature Description',
      type: 'text',
    }),
    defineField({
      name: 'included_item1',
      title: 'Included Item 1',
      description: 'included Item 1 Description',
      type: 'string',
    }),
    defineField({
      name: 'included_item1_qty',
      title: 'Included Item1 QTY',
      description: 'included Item 1 QTY',
      type: 'number',
    }),
    defineField({
      name: 'included_item2',
      title: 'included Item 2',
      description: 'included Item Description',
      type: 'string',
    }),
    defineField({
      name: 'included_item2_qty',
      title: 'Included Item 2 QTY',
      description: 'included Item 2 QTY',
      type: 'number',
    }),
    defineField({
      name: 'included_item3',
      title: 'included Item 3',
      description: 'included Item 3 Description',
      type: 'string',
    }),
    defineField({
      name: 'included_item3_qty',
      title: 'Included Item 3 QTY',
      description: 'included Item 3 QTY',
      type: 'number',
    }),
    defineField({
      name: 'included_item4',
      title: 'included Item 4',
      description: 'Feature Item Description',
      type: 'string',
    }),
    defineField({
      name: 'included_item4_qty',
      title: 'Included Item 4 QTY',
      description: 'included Item 4 QTY',
      type: 'number',
    }),
    defineField({
      name: 'included_item5',
      title: 'included Item 5',
      description: 'Feature Item Description',
      type: 'string',
    }),
    defineField({
      name: 'included_item5_qty',
      title: 'Included Item 5 QTY',
      description: 'included Item 5 QTY',
      type: 'number',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Product Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'desktop_image',
      title: 'Desktop Image',
      type: 'cloudinary.asset',
      description: 'IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mobile_image',
      title: 'Mobile Image',
      type: 'cloudinary.asset',
      description: 'IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tablet_image',
      title: 'Tablet Image',
      type: 'cloudinary.asset',
      description: 'IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt_image_text',
      title: 'Alt Image Text',
      type: 'string',
      description: 'Add text to the image',
    }),
    defineField({
      name: 'category_preview_img',
      title: 'Category Preview Image',
      type: 'cloudinary.asset',
      description: 'Gallery IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery1',
      title: 'Gallery Image 1',
      type: 'cloudinary.asset',
      description: 'Gallery IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery2',
      title: 'Gallery Image 2',
      type: 'cloudinary.asset',
      description: 'Gallery IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery3',
      title: 'Gallery Image 3',
      type: 'cloudinary.asset',
      description: 'Gallery IMGs from Cloudinary',
      options: {
        hotspot: true,
      },
    }),
  ],
})

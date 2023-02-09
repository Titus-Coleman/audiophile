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
      name: 'device',
      title: 'Device',
      description: 'Device ID for unique URL',
      type: 'slug',
      options: {
        source: 'product_id',
      },
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
      title: 'Included Items List',
      type: 'array',
      name: 'included_items',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'title'},
            {type: 'number', name: 'amount'},
          ],
        },
      ],
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
      name: 'cart_image',
      title: 'Cart Image',
      type: 'cloudinary.asset',
      description: 'IMGs from Cloudinary',
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

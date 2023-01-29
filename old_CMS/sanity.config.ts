import {defineConfig} from 'sanity'

// import {deskTool} from 'sanity/desk'
import {schemaTypes} from '../Sanity/schemas'

// import {visionTool} from '@sanity/vision'
import {cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'audiophile',

  projectId: '0z9vh4k1',
  dataset: 'production',

  plugins: [cloudinaryAssetSourcePlugin(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})

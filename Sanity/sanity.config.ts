import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

import {cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'audiophile project',

  projectId: '0z9vh4k1',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), cloudinaryAssetSourcePlugin(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})

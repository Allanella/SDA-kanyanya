import { type SchemaTypeDefinition } from 'sanity'

import { event } from './event'
import { gallery } from './gallery'
import { aboutSection } from './aboutSection'
import { contactSection } from './contactSection'
import { donateSection } from './donateSection'
import { ministersSection } from './ministersSection'
import { ministriesSection } from './ministriesSection'
import { newsItem } from './newsItem'
import { sermon } from './sermon'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutSection,
    event,
    gallery,
    ministersSection,
    ministriesSection,
    newsItem,
    sermon,
    contactSection,
    donateSection,
    ]
}
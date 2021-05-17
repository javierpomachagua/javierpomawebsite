export const createSEOMeta = ({ title, description, image, url }) => [
  { hid: 'og:title', property: 'og:title', content: title },
  { hid: 'description', name: 'description', content: description },
  {
    hid: 'og:description',
    property: 'og:description',
    content: description
  },
  { hid: 'og:image', property: 'og:image', content: image },
  {
    hid: 'og:url',
    property: 'og:url',
    content: url
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image'
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: image
  }
]

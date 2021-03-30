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
    hid: 'twitter:title',
    property: 'twitter:title',
    content: title
  },
  {
    hid: 'twitter:description',
    property: 'twitter:description',
    content: description
  },
  {
    hid: 'twitter:image',
    property: 'twitter:image',
    content: image
  },
  {
    hid: 'twitter:url',
    property: 'twitter:url',
    content: url
  },
  {
    hid: 'twitter:card',
    property: 'twitter:card',
    content: 'summary_large_image'
  }
]

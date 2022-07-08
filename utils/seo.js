export const createSEOMeta = ({ title, description, image, url }) => [
  {
    name: 'title',
    content: title
  },
  {
    name: 'description',
    content: description
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: title
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: description
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: image
  },
  {
    hid: 'og:image:secure_url',
    property: 'og:image:secure_url',
    content: image
  },
  {
    hid: 'og:image:alt',
    property: 'og:image:alt',
    content: title
  },
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
    hid: 'twitter:title',
    name: 'twitter:title',
    content: title
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: description
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: image
  },
  {
    hid: 'twitter:image:alt',
    name: 'twitter:image:alt',
    content: title
  }
]

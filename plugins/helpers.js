export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('scrollToElement', (name) => {
    const el = document.getElementsByClassName(name)[0]
    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

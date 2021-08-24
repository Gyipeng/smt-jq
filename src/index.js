class SmtJq {
  constructor(opt) {
    this.init(opt)
    this.render()
  }

  init(opt) {
    this.dom=document.querySelector(opt.className)
  }


  render() {
    return this.dom.appendChild("123")
  }
}

export default SmtJq


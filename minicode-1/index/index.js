Page({
  data: {
    focus: false,
    content: [],
    maxlength: [
      -1,
      -1,
      -1,
    ]
  },
  onLoad() {
    this._content = []
  },
  changeLength(e) {
    console.log(e.detail.value)
    const id = e.target.dataset.id
    let arr = this.data.content.reduce((length, item, index) => {
      if (id != index && item) {
        length = length - item.length
      }
      return length
    }, 10)
    this.setData({
      [`maxlength[${id}]`]: arr
    })
    console.log(arr)
  },
  changeValue(e) {
    console.log(this.data.content.join(''))
    const id = e.target.dataset.id
    const value = e.detail.value
    const total = this.data.content.join().length
    const preValue = this._content[id] || ''
    console.log(total, preValue)
    console.log()
    if (total > 10) {
      console.log("已经超过了")
      if (value.length >= (this._content?.[id]?.length || '')) {
        this.setData({
          [`content[${e.target.dataset.id}]`]: this._content[id] || "",
        })
      } else {
        this.setData({
          [`content[${id}]`]: value,
        })
      }
      return
    } else {
      this._content[id] = value
    }
    this.setData({
      [`content[${id}]`]: value,
    })
  }
})

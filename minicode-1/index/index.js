Page({
  data: {
    content: [],
  },
  onLoad() {
    this._content = []
  },
  changeLength(e) {
    this.changeValue(e)
  },
  changeValue(e) {
    const id = e.target.dataset.id
    const value = e.detail.value
    const total = this.data.content.join("").length
    const preValue = this._content[id] || ''
    console.log(total,)
    if (total < 10 || (value.length < (this._content?.[id]?.length || ''))) {
      this.setData({
        [`content[${id}]`]: value,
      })
      this._content[id] =value
      return 
    }
    this.setData({
      [`content[${e.target.dataset.id}]`]: preValue,
    })

  }
})

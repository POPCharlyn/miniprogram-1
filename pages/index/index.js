// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        product: {
            price: 10,
            num: 5
        }
    },
    onAddNum() {
        this.setData({
            'product.num': this.data.product.num + 1
        })
    },
    onAddNumN(e) {
        console.log(e)
        const step = parseInt(e.target.dataset.step)
        this.setData({
            'product.num': this.data.product.num + step
        })
    },
    onInput(){

    }
})

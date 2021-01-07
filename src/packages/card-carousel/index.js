// 引入插件组件
import cardCarouselVue from './card-carousel'

// vue.js插件有个公开的install方法，第一个参数是vue构造器，第二个参数是可选的对象
// 组件需要添加name属性，代表注册的组件名称
cardCarouselVue.install = Vue => Vue.component(cardCarousel.name, cardCarousel) // 注册组件

export default cardCarouselVue




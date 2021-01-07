// packages下的插件都在此处统一注册
import cardCarouselVue from './card-carousel/index'

// 插件列表
const components = [cardCarouselVue]

const install = function (Vue, ops = {}) {
    // 若存在则无需注册
    if (install.installed) return;
    // 遍历注册所有组件
    components.forEach((component) => {
        Vue.component(component.name, component)
    })
}

// 支持标签的方式引入，Vue是全局变量时，自动install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    //  以下是具体的组件列表
    cardCarouselVue
}

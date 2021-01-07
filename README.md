# vue-card-carousel

## 基于vue的card类型轮播图组件

## example
    <card-carousel :carouselData="dataList">
          <template scope="props">
            <div>{{ props.item }}</div>
            <!--<div>{{ props.index }}</div>-->
          </template>
        </card-carousel>
    props: The returned object, the item and index of the current card. Used to display the type of each card
### parameter
|  field   | type  | required  | default  | desc  |
|  ----  | ----  | ----  | ---- | ----  |
| carouselData  | Array | yes |  |card list  |
| ids  | String | no | card | id of card |
| cardSetting  | Object | no | { offset: 40,scaleRatio: 0.6,opacity: 0.6} | Two side card style setting(offset: card offset scaleratio card zoom size, opacity: card transparency)|

## install
```
npm i card-carousel-vue --save
```
## using
```
import Vue from "vue"
import cardCarouselVue from 'cardCarouselVue'
Vue.use(cardCarouselVue)
```
## note
Parent box must have width and height



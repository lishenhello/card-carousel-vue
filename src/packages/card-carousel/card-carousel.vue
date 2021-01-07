<template>
    <div class="cardCarousel">
        <div class="card-box" v-for="(item, index) in carouselData" :key="item" :id="ids + item" :class="activeId === index ? 'active-id' : ''">
            <div class="card-wrap" @click="changeActive(index)">
                <slot :index="index" :item="item"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cardCarouselVue",
        props: {
            ids: {
                type: String,
                default: 'card'
            },
            carouselData: {
                type: Array,
                default: () => 3
            },
            cardSetting: {
                type: Object,
                default: () => {
                    return {
                        offset: 40,
                        scaleRatio: 0.6,
                        opacity: 0.6
                    }
                }
            },
        },
        data() {
            return {
                activeId: 0,
            }
        },
        mounted() {
            this.setPosition()
        },
        methods: {
            changeActive(index) {
                this.activeId = index
                this.setPosition()
            },
            setPosition() {
                const _id = this.activeId
                const parentWidth = $('.cardCarousel').parent()[0].offsetWidth
                const distanceWidth = parentWidth / 4
                const itemWidth = parentWidth / 2
                const offsetWidth = this.cardSetting.offset
                const splitNum = Math.round(this.carouselData.length / 2)
                const scaleRatio = this.cardSetting.scaleRatio
                const opacity = this.cardSetting.opacity

                for(let i = 0; i < this.carouselData.length; i++) {
                    if (i < splitNum) {
                        if (i === 0) {
                            $(`#${this.ids}${_id + 1}`).css('transform', `translateX(${distanceWidth}px) scale(1)`)
                            $(`#${this.ids}${_id + 1}`).css('opacity', '1')
                        } else if (_id + i < this.carouselData.length) {
                            if (i === 1) {
                                $(`#${this.ids}${_id + i + 1}`).css('transform', `translateX(${distanceWidth + itemWidth * (1 - (1 - scaleRatio) / 2) + offsetWidth}px) scale(${scaleRatio})`)
                                $(`#${this.ids}${_id + i + 1}`).css('opacity', opacity)
                            } else {
                                $(`#${this.ids}${_id + i + 1}`).css('transform', `translateX(${parentWidth}px) scale(${scaleRatio})`)
                                $(`#${this.ids}${_id + i + 1}`).css('opacity', '0')
                            }
                        } else {
                            if (i === 1) {
                                $(`#${this.ids}${_id + i - this.carouselData.length + 1}`).css('transform', `translateX(${distanceWidth + itemWidth * (1 - (1 - scaleRatio) / 2) + offsetWidth}px) scale(${scaleRatio})`)
                                $(`#${this.ids}${_id + i - this.carouselData.length + 1}`).css('opacity', opacity)
                            } else {
                                $(`#${this.ids}${_id + i - this.carouselData.length + 1}`).css('transform', `translateX(${parentWidth}px) scale(${scaleRatio})`)
                                $(`#${this.ids}${_id + i - this.carouselData.length + 1}`).css('opacity', '0')
                            }
                        }
                    } else {
                        if (_id + i < this.carouselData.length) {
                            if (i === this.carouselData.length - 1) {
                                $(`#${this.ids}${_id + i + 1}`).css('transform', `translateX(${distanceWidth - itemWidth * (1 - (1 - scaleRatio) / 2) - offsetWidth}px) scale(${scaleRatio})`)
                                $(`#${this.ids}${_id + i + 1}`).css('opacity', opacity)
                            } else {
                                $(`#${this.ids}${_id + i + 1}`).css('transform', `translateX(${-itemWidth}px) scale(${scaleRatio})`)
                                $(`#${this.ids}${_id + i + 1}`).css('opacity', '0')
                            }
                        } else {
                            if (i === this.carouselData.length - 1) {
                                $(`#${this.ids}${_id + i - this.carouselData.length + 1}`).css('opacity', opacity)
                                $(`#${this.ids}${_id + i - this.carouselData.length + 1}`).css('transform', `translateX(${distanceWidth - itemWidth * (1 - (1 - scaleRatio) / 2) - offsetWidth}px) scale(${scaleRatio})`)
                            } else {
                                $(`#${this.ids}${_id + i - this.carouselData.length + 1}`).css('transform', `translateX(${-itemWidth}px) scale(${scaleRatio})`)
                                $(`#${this.ids}${_id + i - this.carouselData.length + 1}`).css('opacity', '0')
                            }
                        }
                    }
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .cardCarousel {
        width: 100%;
        height: 100%;
        position: relative;
        .card-box {
            width: 50%;
            position: absolute;
            height: 100%;
            left: 0;
            top: 0;
            transition: all .5s;
            opacity: .5;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
            &.active-id {
                opacity: 1;
            }
            .card-wrap {
                height: 100%;
                cursor: pointer;
            }
        }
    }
</style>

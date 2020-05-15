<!--
 * @Description: 
 * @Autor: kangpeng
 * @Date: 2020-02-28 14:01:35
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-04-28 11:26:57
 -->
<template>
    <div class="thumb-example">
        <!-- swiper1 -->
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
            <swiper-slide v-for="(o,index) in venueDetailData.urls" :key="index">
                <img :src="o" alt />
            </swiper-slide>

            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
            <swiper-slide v-for="(o,index) in venueDetailData.urls" :key="index">
                <img :src="o" alt />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            venueDetailData: {},
            swiperOptionTop: {
                loop: true,
                loopedSlides: 5, // looped slides should be the same
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 5, // looped slides should be the same
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: "auto",
                touchRatio: 0.2,
                slideToClickedSlide: true
            }
        };
    },
    created() {},
    mounted() {
        this.getDetailData();
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper;
            const swiperThumbs = this.$refs.swiperThumbs.$swiper;
            swiperTop.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiperTop;
        });
    },
    methods: {
        getDetailData() {
            let params = {
                storeId: "43"
            };
            this.get("/api/v1/storeWebsite/desc", params)
                .then(res => {
                    if (res.code == 200) {
                        this.venueDetailData = res.data;
                        console.log(this.venueDetailData);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
        }
    }
};
</script>

<style lang="less" scoped>
.thumb-example {
    width: 50%;
    height: 480px;
    background-color: #000;
}
.swiper {
    .swiper-slide {
        background-size: cover;
        background-position: center;
    }
    &.gallery-top {
        height: 80%;
        width: 100%;
    }
    &.gallery-thumbs {
        height: 20%;
        box-sizing: border-box;
        padding: 0;
    }
    &.gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
}
</style>
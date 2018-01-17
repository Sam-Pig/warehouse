!function(){
    let view = document.querySelector(".swiper-container-outer");
    let controller = {
        view: null,
        mySwiper: null,
        swiperOption: {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        },
        init: function(view){
            this.view = view;
            this.initSwiper();
        },
        initSwiper: function(){
            this.mySwiper = new Swiper (this.view.querySelector(".swiper-container"),this.swiperOption)
        }
    }
    controller.init(view)
}.call()

//= ../../../node_modules/slick-carousel/slick/slick.js

$(function () {
    $('#reviews').slick({
        arrows: false,
        dots: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    })
})

const reviews = $("#reviews");

$("#reviews__arrow--left").on("click", function (event) {
    reviews.slick("slickPrev");
})

$("#reviews__arrow--right").on("click", function (event) {
    reviews.slick("slickNext");
})

const app = new Vue({
    el: '#app',
    data: {
      errorsEmail: [],
      errorsPass:[],
      email: null,
      password: null
    },
    methods: {
      checkForm: function (e) {  
        this.errorsEmail = [];
        this.errorsPass = [];
  
        if (!this.email) {
            this.errorsEmail.push('Введите email');
          } else if (!this.validEmail(this.email)) {
            this.errorsEmail.push('Введите валидный E-Mail');
        }
        if (!this.password) {
          this.errorsPass.push('Введите пароль');
        }
  
        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      checkEmail: function(e) {
        this.errorsEmail = [];

        if (!this.email) {
            this.errorsEmail.push('Введите email');
          } else if(!this.validEmail(this.email)) {
            this.errorsEmail.push('Введите валидный E-Mail');
        }

      },
      checkPasswordInput: function(e) {
        this.errorsPass = [];

        if(this.password.trim().length < 6 && this.password.trim().length != 0) {
            this.errorsPass.push('Пароль должен содержать минимум 6 символов');
        } else if(this.password.trim().length <= 0) {
            this.errorsPass.push('Введите пароль');
        }

      }
    }
  })
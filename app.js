var splide = new Splide( '#splideFeedback', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  pagination: boolean = false,
} ).mount();

var splide = new Splide( '#splideSertificate', {
  type   : 'loop',
  perPage: 5,
  breakpoints: {
    1399: {
      perPage: 4,
    },
    1199: {
      perPage:3,
    },
    991: {
      perPage:2,
    },
    767: {
      perPage:1,
    },
  },
  perMove: 1,
  pagination: boolean = false,
} ).mount();


var splide = new Splide( '#splidePortfolio', {
  type   : 'loop',
  perPage: 4,
  breakpoints: {
    1199: {
      perPage:3,
    },
    991: {
      perPage:2,
    },
    767: {
      perPage:1,
    },
  },
  perMove: 1,
  pagination: boolean = false,
} ).mount();







// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
// init Swiper:
const swiper = new Swiper('.swiper', {
  crossFade: true,
  effect: 'coverflow',
});

console.log(swiper);

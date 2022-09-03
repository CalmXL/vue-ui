import Carousel from './Carousel';
import CarItem from './Carousel/Item';
import TreeMenu from './TreeMenu';
import MenuItem from './TreeMenu/MenuItem';
import Selector from './Selector';

let JsppUI = {};

JsppUI.install = function (Vue) {
  Vue.component('Carousel', Carousel);
  Vue.component('CarItem', CarItem);
  Vue.component('TreeMenu', TreeMenu);
  Vue.component('MenuItem', MenuItem);
  Vue.component('Selector', Selector);
}

export default JsppUI;
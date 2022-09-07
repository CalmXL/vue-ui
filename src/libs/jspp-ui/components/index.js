import Carousel from './Carousel';
import CarItem from './Carousel/Item';

import TreeMenu from './TreeMenu';
import MenuItem from './TreeMenu/MenuItem';
import SubMenu from './TreeMenu/SubMenu';

import Selector from './Selector';

import DataPager from './DataPager';

let JsppUI = {};

JsppUI.install = function (Vue) {
  Vue.component('Carousel', Carousel);
  Vue.component('CarItem', CarItem);
  Vue.component('TreeMenu', TreeMenu);
  Vue.component('MenuItem', MenuItem);
  Vue.component('SubMenu', SubMenu);
  Vue.component('Selector', Selector);
  Vue.component('DataPager', DataPager);
  
}

export default JsppUI;
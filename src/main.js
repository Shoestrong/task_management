// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Input, Button, Row, Col, Checkbox, CheckboxGroup, Tag} from 'element-ui';
import '../static/element-ui-custom/index.css';

Vue.use(Input);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tag);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

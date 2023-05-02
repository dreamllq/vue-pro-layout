import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './custom.css';
import Layout from './layout.vue'

export default {
  Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
  }
};
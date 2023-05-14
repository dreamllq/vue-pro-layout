import { defineComponent } from 'vue';
import DIcon from './icon.vue';

export default defineComponent({
  components: { DIcon: DIcon },
  props: {
    menuItem: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    renderSubMenu(menuItem) {
      return <el-sub-menu index={menuItem.key}>
        {{
          default: () => (menuItem.children.map(item => {
            if (Array.isArray(item.children) && item.children.length > 0) {
              return this.renderSubMenu(item);
            } else {
              return <el-menu-item
                index={item.key}
              >
                {{ default: () => item.label }}
              </el-menu-item>;
            }
          })),
          title: () => [menuItem.icon !== '' || menuItem.icon !== null ? (<d-icon icon={menuItem.icon}></d-icon>) : undefined, <span>{menuItem.label}</span>]
        }}
      </el-sub-menu>;
    }
  },
  render() {
    return this.renderSubMenu(this.menuItem);
  }
});
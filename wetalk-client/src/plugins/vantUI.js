import Vue from 'vue'
import {
  Button, Tabbar, TabbarItem,
  NavBar, Icon, NoticeBar,
  Field, Cell, CellGroup,
  Picker, Popup, Area,
  Search, PullRefresh, Toast,
  tag, Lazyload, Circle,
  ActionSheet, SwitchCell, Divider,
  Tab, Tabs, ImagePreview,
  Image, SwipeCell, Uploader,
  Dialog, Sidebar, SidebarItem
} from 'vant'

Vue.use(Button).use(Tabbar).use(TabbarItem)
Vue.use(NavBar).use(Icon).use(NoticeBar)
Vue.use(Field).use(Cell).use(CellGroup)
Vue.use(Picker).use(Popup).use(Area)
Vue.use(Search).use(PullRefresh).use(Toast)
Vue.use(tag).use(Lazyload).use(Circle)
Vue.use(ActionSheet).use(SwitchCell).use(Divider)
Vue.use(Tab).use(Tabs).use(ImagePreview)
Vue.use(Image).use(SwipeCell).use(Uploader)
Vue.use(Dialog).use(Sidebar).use(SidebarItem)

Vue.prototype.$ImagePreview = ImagePreview

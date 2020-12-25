import {
  Option,
  Input,
  Grid,
  GridColumn,
  GridToolbar,
  Button,
  Select,
  Layout,
  Row,
  Col,
  Form,
  FormItem,
  Collapse,
  CollapseItem,
  Pager,
  Tabs,
  TabItem,
  Breadcrumb,
  BreadcrumbItem
} from '@aurora/vue';
import {
  MessageBox,
  Message,
  Dialog,
  Loading,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Progress,
  Icon
} from 'element-ui';
const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Dialog);
    Vue.use(Select);
    Vue.use(Grid);
    Vue.use(Layout);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Collapse);
    Vue.use(CollapseItem);
    Vue.use(Pager);
    Vue.use(GridColumn);
    Vue.use(Tabs);
    Vue.use(TabItem);
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);
    Vue.use(Input);
    Vue.use(Progress);
    Vue.use(Option);
    Vue.use(GridToolbar);
    Vue.use(Icon);
    // Vue.use(Loading.directive);
    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
  }
}
export default element


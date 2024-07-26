const { Controller } = require("egg");

const ADD_TEMPLATE = [
  {
    name: "vue3项目模版",
    value: "template-vue3",
    npmName: "@oweqian/template-vue3",
    version: "1.0.1",
  },
  {
    name: "react18项目模版",
    value: "template-react18",
    npmName: "@oweqian/template-react18",
    version: "1.0.1",
  },
  {
    name: "vue-element-admin项目模版",
    value: "template-vue-element-admin",
    npmName: "@oweqian/template-vue-element-admin",
    version: "1.0.0",
  },
];

class ProjectController extends Controller {
  async template() {
    const { ctx } = this;
    ctx.body = ADD_TEMPLATE;
  }
}

module.exports = ProjectController;

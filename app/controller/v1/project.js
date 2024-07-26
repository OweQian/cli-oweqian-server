const Controller = require("egg").Controller;

class ProjectController extends Controller {
  // 项目模版查询
  async index() {
    const { ctx } = this;
    const res = await ctx.model.Project.find({});
    ctx.body = res;
  }
  // 项目模版查询
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.model.Project.find({ value: id });
    if (res.length > 0) {
      ctx.body = res[0];
    } else {
      ctx.body = res;
    }
  }
}
module.exports = ProjectController;

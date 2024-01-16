const path = require('path');

// // 301 重定向到 默认语言主页
// exports.createPages = ({ actions }) => {
//   const { createRedirect } = actions;
//   createRedirect({
//     fromPath: '/',
//     toPath: '/en/home/',
//     isPermanent: true,
//     redirectInBrowser: true,
//   });
// };

// 配置别名
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/images": path.resolve(__dirname, "src/images"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/utils": path.resolve(__dirname, "src/utils"),
      },
    },
  });
};

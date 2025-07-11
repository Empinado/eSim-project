const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        additionalData: `
          @use "@/assets/styles/variables" as *;
          @use "@/assets/styles/mixins" as *;
        `,

        sassOptions: {
          quietDeps: true,
          outputStyle: "compressed",
        },
      },
    },
  },
});

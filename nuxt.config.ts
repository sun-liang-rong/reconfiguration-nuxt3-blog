// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["animate.css/animate.min.css", "@/assets/theme.css"],
  build: {
    terser: false,
    extend(config: { optimization: { minimize: boolean; minimizer: any[]; }; }, { isServer }: any) {
      // if (!isServer) {
        config.optimization.minimize = true
        config.optimization.minimizer = [
          new require('uglifyjs-webpack-plugin')({
            uglifyOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ]
      // }
    },
    postcss: {
      preset: {
        autoprefixer: {},
        "postcss-preset-env": {
          features: {
            "custom-properties": {
              preserve: false,
            },
          },
        },
      },
    },
  },
  render: {
    bundleRenderer: {
      cache: false,
    },
  },
  devtools: { enabled: true },
});

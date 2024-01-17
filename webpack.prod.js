import { merge } from "webpack-merge"
import TerserPlugin from "terser-webpack-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"

import common from "./webpack.common.js"

const config = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        exclude: /node_modules/,
        parallel: true,
        minimizerOptions: {
          preset: [
            "default",
            {
              discardCommnets: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
  },
}

export default merge(common, config)

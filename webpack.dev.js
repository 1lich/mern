import { merge } from "webpack-merge"

import common from "./webpack.common.js"

const PORT = 8081

const config = {
  mode: "development",
  optimization: {
    usedExports: true,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: `${PORT}`,
    host: "192.168.31.130",
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    proxy: {
      context: ["/api"],
      target: `http://localhost:${PORT}`,
    },
  },
}

export default merge(common, config)

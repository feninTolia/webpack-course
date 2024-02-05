import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types/types';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3001,
    open: true,
    //if you distribute static via nginx, you need to proxy to Index.html
    historyApiFallback: true,
    hot: true,
  };
}

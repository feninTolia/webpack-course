import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/types';

export function buildWebpack(options: IBuildOptions): webpack.Configuration {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode ?? 'development',
    entry: options.paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      path: options.paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(options),
    plugins: buildPlugins(options),
  };
}

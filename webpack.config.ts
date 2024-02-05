import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import {
  BuildMode,
  BuildPlatform,
  IBuildPaths,
} from './config/build/types/types';
import path from 'path';

interface IEnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? 'desktop',
  });

  return config;
};

export type BuildMode = 'development' | 'production';
export type BuildPlatform = 'mobile' | 'desktop';

export interface IBuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export interface IBuildOptions {
  port: number;
  paths: IBuildPaths;
  mode: BuildMode;
  platform: BuildPlatform;
  analyzer: boolean;
}

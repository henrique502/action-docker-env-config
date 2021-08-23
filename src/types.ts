export enum Environment {
  Stage = 'stg',
  Sandbox = 'sdx',
  Production = 'prd',
}

export type InputData = {
  tag: string;
  version: string;
  shortSha: string;
  projectSlug: string;
  environment: Environment;
  containerRegistry: string;
  chartSourceLocation: string;
};

export type OutputData = {
  tag: string;
  version: string;
  shortSha: string;
  projectSlug: string;
  environment: string;
  containerRegistry: string;
  containerImage: string;
  chartSourceLocation: string;
  chartTargetLocation: string;
};

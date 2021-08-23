import * as core from '@actions/core';
import { OutputData } from './types';

const outputs = (data: OutputData): void => {
  core.setOutput('tag', data.tag);
  core.setOutput('version', data.version);
  core.setOutput('short_sha', data.shortSha);
  core.setOutput('project_slug', data.projectSlug);
  core.setOutput('containerRegistry', data.containerRegistry);
  core.setOutput('containerImage', data.containerImage);
  core.setOutput('chartSourceLocation', data.chartSourceLocation);
  core.setOutput('chartTargetLocation', data.chartTargetLocation);
};

export default outputs;

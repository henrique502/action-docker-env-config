import core from '@actions/core';
import github from '@actions/github';
import semver from 'semver/functions/valid';
import { Environment, InputData } from './types';

const getEnvironment = (): Environment => {
  const val = core.getInput('environment');

  switch (val) {
    case Environment.Stage:
    case 'stage':
      return Environment.Stage;
    case Environment.Sandbox:
    case 'sandbox':
      return Environment.Sandbox;
    case Environment.Production:
    case 'production':
      return Environment.Production;
    default:
      throw new ReferenceError(`Invalid environment variable, only the following options are accepted: ${Environment.Stage}, ${Environment.Sandbox} or ${Environment.Production}.`);
  }
};

const inputs = (): InputData => {
  let tag: string | null = null;
  let version: string = '';

  const shortSha = github.context.sha.substring(0, 8);
  const projectSlug: string = github.context.event.repository.name;

  if (github.context.ref.startsWith('refs/tags/')) {
    tag = github.context.ref.replace('refs/tags/', '');

    if (tag.charAt(0) === 'v') {
      version = tag.slice(1);
    }
  }

  if (tag === null) {
    throw new ReferenceError('It\'s is mandatory to create a release to use this action.');
  }

  if (!semver(version)) {
    throw new ReferenceError('It\'s is mandatory to use the pattern semver in the tag. Example: v1.2.3-stg');
  }

  return {
    tag,
    version,
    shortSha,
    projectSlug,
    environment: getEnvironment(),
    containerRegistry: core.getInput('container_registry'),
    chartSourceLocation: core.getInput('chart_source_location'),
  };
};

export default inputs;

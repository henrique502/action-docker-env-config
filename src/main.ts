import * as core from '@actions/core';
import handler from './handler';

async function run() {
  try {
    await handler();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

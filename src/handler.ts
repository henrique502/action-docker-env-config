import inputs from './inputs';
import outputs from './outputs';

const handler = async (): Promise<void> => {
  const data = inputs();

  const containerImage = [
    data.containerRegistry,
    '/',
    data.projectSlug,
    '-',
    data.environment,
    ':',
    data.tag,
  ].join('');

  const chartTargetLocation = [
    'charts/',
    data.projectSlug,
    '/',
    data.tag,
  ].join('');

  outputs({
    ...data,
    environment: data.environment.toString(),
    containerImage,
    chartTargetLocation,
  });
};

export default handler;

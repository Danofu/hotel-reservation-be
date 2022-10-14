import { keys as configKeys } from '../config/keys';
import { SecretsReader as gcpSecretLoader } from './gcp-secrets';

const assignSecretKeys = async () => {
  if (configKeys.NODE_ENV === 'development') {
    return;
  }
  const revealedKeys = [
    'DB_INSTANCE_CONNECTION_NAME',
    'NODE_ENV',
    'BUCKET',
    'PROJECTID',
    'USERAGENT',
    'FRONTEND_URL',
    'BACKEND_URL',
    'NO_OF_DAYS_FOR_METADATA',
    'SERP_TABLE',
    'FIVETRAN_GROUP_ID',
  ];

  for (let i = 0; i < Object.keys(configKeys).length; i++) {
    let property = Object.keys(configKeys)[i];

    if (!revealedKeys.includes(property) && configKeys[property]) {
      configKeys[property] = await gcpSecretLoader.getSecretValue(
        configKeys[property],
      );
    }
  }
};

export default assignSecretKeys;

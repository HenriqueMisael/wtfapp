/* eslint-disable no-undef,no-process-env */
import axios from 'axios';

export const environment = {
  b2bBaseUrl: process.env.B2B_BASE_URL,
  b2bCustomerAppClientId: process.env.B2B_CUSTOMER_APP_CLIENT_ID,
  b2bCustomerPortalClientId: process.env.B2B_CUSTOMER_PORTAL_CLIENT_ID,
  b2bAudience: process.env.B2B_AUDIENCE,
  bannerBaseUrl: process.env.BANNER_BASE_URL,
  cacheClearEnabled: process.env.CACHE_CLEAR_ENABLED === 'true',
  cacheEnabled: process.env.CACHE_ENABLED === 'true',
  hardCodedCustomerEnabled: process.env.HARD_CODED_CUSTOMER_ENABLED === 'true',
  hardCodedCustomerId: process.env.HARD_CODED_CUSTOMER_ID,
  hubBaseUrl: process.env.HUB_BASE_URL,
  nodeEnv: process.env.NODE_ENV,
  onlineFetchAfterUpdateEnabled: process.env.ONLINE_FETCH_AFTER_UPDATE_ENABLED === 'true',
  onlineUpdateEnabled: process.env.ONLINE_UPDATE_ENABLED === 'true',
  publicUrl: process.env.PUBLIC_URL,
  queueEnabled: process.env.QUEUE_ENABLED === 'true',
  resetPasswordUrl: process.env.RESET_PASSWORD_URL,
  schedulerEnabled: process.env.SCHEDULER_ENABLED === 'true',
  ssoOpenIdConnectUrl: process.env.SSO_OPEN_ID_CONNECT_URL,
  realm: process.env.REALM,
};

export const initNetworkConfig = () => {
  axios.defaults.baseURL = environment.b2bBaseUrl;
};

/*
 * Vercel
 */
export const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL as
  | string
  | undefined;

/*
 * Google Api Key
 */
export const GOOGLE_PLACES_API_KEY = process.env
  .GOOGLE_PLACES_API_KEY as string;

/*
 * ABN GUID
 */
export const ABN_GUID = process.env.ABN_GUID as string;

/*
 * Cloud Check
 */
const CLOUD_CHECK_KEY_ID = process.env.CLOUD_CHECK_KEY_ID as string;
const CLOUD_CHECK_KEY_DEV = process.env.CLOUD_CHECK_KEY_DEV as string;
const CLOUD_CHECK_SECRET_ID = process.env.CLOUD_CHECK_SECRET_ID as string;
const CLOUD_CHECK_SECRET_DEV = process.env.CLOUD_CHECK_SECRET_DEV as string;
const CLOUD_CHECK_PEP = process.env.CLOUD_CHECK_KEY_PEP as string;
const CLOUD_CHECK_PEP_SECRET = process.env.CLOUD_CHECK_SECRET_PEP as string;

export const USE_PAID_CLOUD_CHECK_API = process.env
  .USE_PAID_CLOUD_CHECK_API as string;
export const CLOUD_CHECK_KEY =
  USE_PAID_CLOUD_CHECK_API === "true"
    ? CLOUD_CHECK_KEY_ID
    : CLOUD_CHECK_KEY_DEV;
export const CLOUD_CHECK_SECRET =
  USE_PAID_CLOUD_CHECK_API === "true"
    ? CLOUD_CHECK_SECRET_ID
    : CLOUD_CHECK_SECRET_DEV;
export const CLOUD_CHECK_KEY_PEP =
  USE_PAID_CLOUD_CHECK_API === "true" ? CLOUD_CHECK_PEP : CLOUD_CHECK_KEY_DEV;
export const CLOUD_CHECK_SECRET_PEP =
  USE_PAID_CLOUD_CHECK_API === "true"
    ? CLOUD_CHECK_PEP_SECRET
    : CLOUD_CHECK_SECRET_DEV;

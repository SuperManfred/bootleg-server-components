/*
 * This config file will contain the global constants for all of the url paths in our repository.
 * This means that any changes to our file path structure can quickly be linked to all of our buttons
 * Without any risk of our button linking to pages that no longer exist.
 *
 * All url path constants in this file should be prefixed by URL_PATH_ for intellisense reasons
 * All api path constants in this file should be prefixed by API_PATH_ for intellisense reasons
 *
 * Url should not include the '/' at the end
 */

/*
 * URL PATH Constants
 */

export const URL_PATH_INDEX = '';
export const URL_PATH_PLAYGROUND = '/playground';
export const URL_PATH_PLAYGROUND2 = '/playground2';
export const URL_PATH_MANFRED_PLAYGROUND = '/ManfredsPlayground';
export const URL_PATH_IDENTIFY_USER = '/identify-user';
export const URL_PATH_DOCUMENT = '/document';
export const URL_PATH_RELYING_PARTY = '/relyingparty';
export const URL_PATH_VERIFY_COMPANY = '/verify/company';

/*
 * API Constants
 */

export const API_PATH_ABN_LOOKUP = '/api/abn-lookup';
export const API_PATH_ASX_LOOKUP = '/api/asx-lookup';
export const API_PATH_CLOUDCHECK = '/api/cloudcheck';
export const API_PATH_GOOGLE_AUTOCOMPLETE = '/api/google-address-autocomplete';
export const API_PATH_GOOGLE_DETAILS = '/api/google-address-details';
export const API_PATH_SUBMIT_INDIVIDUAL = '/api/submit-individual';
export const API_PATH_TICKER_LOOKUP = '/api/ticker-lookup';

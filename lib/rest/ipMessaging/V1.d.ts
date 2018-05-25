/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { CredentialListInstance } from './v1/credential';
import { ServiceListInstance } from './v1/service';


/**
 * Initialize the V1 version of IpMessaging
 */
declare class V1 extends Version {
  /**
   * Initialize the V1 version of IpMessaging
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly credentials: CredentialListInstance;
  readonly services: ServiceListInstance;
}

export = V1;
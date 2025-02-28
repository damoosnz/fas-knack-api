import { payloads } from "./knack-api/knack-api-payloads.js";
import { filters } from "./knack-api/knack-api-filters.js";
import { calls } from "./knack-api/knack-api-calls.js";
import { utils } from "./knack-api/knack-api-utils.js";
import { timeout } from "./knack-api/knack-api-timeout.js";

export const knackApi = {
    filters: filters,
    payloads: payloads,
    calls: calls,
    utils: utils,
    timeout: timeout
}
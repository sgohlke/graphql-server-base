import { IncomingHttpHeaders } from 'node:http'
import { GraphQLRequestInfo } from '..'

/**
 * Interface for incoming server requests.
 * Used in "handleRequest" and "handleRequestAndSendResponse" core functions. Server requests from
 * different server framework may already provide these field, if not they can easily be mapped.
 */
export interface GraphQLServerRequest {
    headers: IncomingHttpHeaders,
    url?: string,
    body?: unknown,
    method?: string;
}

export function isGraphQLServerRequest(request: GraphQLServerRequest | GraphQLRequestInfo) 
    : request is GraphQLServerRequest {
    return 'headers' in request && 'method' in request
}
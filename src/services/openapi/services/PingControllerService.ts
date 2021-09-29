/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PingResponse } from '../models/PingResponse';
import { request as __request } from '../core/request';

export class PingControllerService {

    /**
     * @returns PingResponse Ping Response
     * @throws ApiError
     */
    public static async pingControllerPing(): Promise<PingResponse> {
        const result = await __request({
            method: 'GET',
            path: `/ping`,
        });
        return result.body;
    }

}
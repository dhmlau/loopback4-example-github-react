/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult } from '../models/QueryResult';
import { request as __request } from '../core/request';

export class GhQueryControllerService {

    /**
     * @param repo
     * @param label
     * @returns QueryResult Array of GitHub issues info
     * @throws ApiError
     */
    public static async ghQueryControllerGetIssuesByLabel(
        repo: string,
        label: string,
    ): Promise<QueryResult> {
        const result = await __request({
            method: 'GET',
            path: `/issues/repo/${repo}/label/${label}`,
        });
        return result.body;
    }

}
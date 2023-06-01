import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class DataAccess {
    constructor(
        private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
        private readonly dataTable = process.env.DATA_TABLE) {
    }

    async createItem(newItem: any) {
        await this.docClient
            .put({
                TableName: this.dataTable,
                Item: newItem
            })
            .promise()
        return newItem
    }
}
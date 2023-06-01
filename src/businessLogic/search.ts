import * as uuid from 'uuid'
import Axios from 'axios'

import { DataAccess } from '../dataLayer/dataAccess'
import { APIGatewayProxyEvent } from 'aws-lambda'

const dataAccess = new DataAccess()

export async function search(event: APIGatewayProxyEvent) {
    let {term} = event.queryStringParameters
    // get from itunes 
    // EXAMPLE: https://itunes.apple.com/search?term=jack+johnson
    const response = await Axios.get(`https://itunes.apple.com/search?media=podcast&term=${term}&limit=25`)

    for (const item of response.data.results) {
        
        const itemId = uuid.v4()
    
        let newItem = {
            itemId,
            ...item,
        }
        // save to DB
        await dataAccess.createItem(newItem)
    }

    return response.data.results || []
}
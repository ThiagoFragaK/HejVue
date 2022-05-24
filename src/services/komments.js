import {http} from './config'

export default {
    list:() => {
        return http.get('https://jsonplaceholder.typicode.com/comments')
    }
}
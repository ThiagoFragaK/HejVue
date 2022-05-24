import {mycall} from './config'

export default {
    list:() => {
        return mycall.get('/getas_list')
    },
    above:() => {
        return mycall.get('/getas_above')
    },
    below:() => {
        return mycall.get('/getas_below')
    },
    between:() => {
        return mycall.get('/getas_between')
    }
}
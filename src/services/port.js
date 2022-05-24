import {mycall} from './config'

export default {
    portlist:() => {
        return mycall.get('/agree_list')
    },
    portmonthly:() => {
        return mycall.get('/agree_month')
    },
    portdaily:() => {
        return mycall.get('/agree_day')
    },
    portAcionamentoMonth:() => {
        return mycall.get('/tri_month')
    },
    portAcionamentoTag:() => {
        return mycall.get('/tri_day')
    }
}
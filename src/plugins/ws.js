import emitter from '@/plugins/emitter.js'
import axios from 'axios'

const ws = new WebSocket("wss://stream.binance.com:9443/ws/bnbbtc@depth")
ws.onmessage = (event) => {
    const stockObject = JSON.parse(event.data)
    emitter.emit('get-crypto', {
        'bids': stockObject.b,
        'asks': stockObject.a
    })

    axios.get('https://api.binance.com/api/v3/depth?symbol=BNBBTC&limit=50')
        .then((value) => {
            emitter.emit('get-stock-glass', value.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

export default ws

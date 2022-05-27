import emitter from '@/plugins/emitter.js'
const ws = new WebSocket("wss://stream.binance.com:9443/ws/bnbbtc@depth")
ws.onmessage = (event) => {
    const stockObject = JSON.parse(event.data)
    emitter.emit('get-crypto', {
        'Bid': {
            'Price': stockObject.b[0], 
            'Amount': stockObject.b[1],
        }, 
        'Ask': {
            'Price': stockObject.a[0], 
            'Amount': stockObject.a[1],   
        }
    })
}

export default ws

//https://api.binance.com/api/v3/depth?symbol=BNBBTC&limit=1000 .
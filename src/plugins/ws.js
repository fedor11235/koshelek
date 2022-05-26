import emitter from '@/plugins/emitter.js'
const ws = new WebSocket("wss://stream.binance.com:9443/ws/bnbbtc@depth")
ws.onmessage = (event) => {
    const stockObject = JSON.parse(event.data)
    emitter.emit('get-crypto', stockObject)
}

export default ws
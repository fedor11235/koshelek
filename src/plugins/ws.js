const ws = new WebSocket("wss://stream.binance.com:9443/ws/bnbbtc@depth")
ws.onmessage = (event) => {
    const stockObject = JSON.parse(event.data)
    // console.log(stockObject)
    this.emitter.emit('get-crypto', stockObject)
}

export default ws
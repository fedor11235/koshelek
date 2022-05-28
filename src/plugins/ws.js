import emitter from '@/plugins/emitter.js'
import axios from 'axios'

let changeCryptoLower = 'btcusdt'
let changeCryptoBig = 'BNBBTC'

let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${changeCryptoLower}@depth`)

emitter.on('change-crypto', (event) => {
    changeCryptoBig= event[0]
    changeCryptoLower = event[1]
    ws.close(1000, "меняем валюту");
    ws = new WebSocket(`wss://stream.binance.com:9443/ws/${changeCryptoLower}@depth`)
    
    ws.onmessage = (event) => {
        const stockObject = JSON.parse(event.data)
        console.log(stockObject)
        emitter.emit('get-crypto', {
            'bids': stockObject.b,
            'asks': stockObject.a
        })
    
        axios.get(`https://api.binance.com/api/v3/depth?symbol=${changeCryptoBig}&limit=50`)
            .then((value) => {
                emitter.emit('get-stock-glass', value.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    ws.onclose = (event) => {
        if (event.wasClean) {
            console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
            console.log('[close] Соединение прервано');
        }
    };
    
    ws.onerror = (error) => {
        console.log(`[error] ${error.message}`);
    };
    
});

ws.onmessage = (event) => {
    const stockObject = JSON.parse(event.data)
    console.log(stockObject)
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

ws.onclose = (event) => {
    if (event.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
        console.log('[close] Соединение прервано');
    }
};

ws.onerror = (error) => {
    console.log(`[error] ${error.message}`);
};

export default ws

import emitter from '@/plugins/emitter.js'
import axios from 'axios'

let changeCryptoLower = 'btcusdt'
let changeCryptoBig = 'BNBBTC'

let api = new WebSocket(`wss://stream.binance.com:9443/ws/${changeCryptoLower}@depth`)

emitter.on('change-crypto', (event) => {
    changeCryptoBig= event[0]
    changeCryptoLower = event[1]
    api.close(1000, "меняем валюту");
    api = new WebSocket(`wss://stream.binance.com:9443/ws/${changeCryptoLower}@depth`)
    
    api.onmessage = (event) => {
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

    api.onclose = (event) => {
        if (event.wasClean) {
            console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
            console.log('[close] Соединение прервано');
        }
    };
    
    api.onerror = (error) => {
        console.log(`[error] ${error.message}`);
    };
    
});

api.onmessage = (event) => {
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

api.onclose = (event) => {
    if (event.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
        console.log('[close] Соединение прервано');
    }
};

api.onerror = (error) => {
    console.log(`[error] ${error.message}`);
};

export default api

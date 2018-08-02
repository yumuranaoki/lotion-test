const lotion = require('lotion');
const initialState = {
  utxo: []
};
const app = lotion({ initialState: initialState });

function txHandler(state, tx, chainInfo) {
  if (tx.address) {
    state.utxo.push(tx.address)
  }
}

app.use(txHandler);

app.listen(3000);
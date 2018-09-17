/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 15, 2018
*************************************************************************/

function exchanger(currency) {
  const notes = { H: 50, Q: 25, D: 10, N: 5, P: 1 }; // coin notes
  const dough = { };                                 // potential coins from exchange
  let coins;                                         // transactional coins

  if (currency >= 10000)                             // sending a kindly message if the amount is too large
    throw "The exchange limit is exceeded";
  else if (currency > 0) {                           // if there's currency to exchange
    for (const note in notes) {                      // iterating through coin notes
      coins = Math.floor(currency / notes[note]);    // getting potential coins
      currency %= notes[note];                       // getting remaining currency

      if (coins > 0)                                 // if there are coins
        dough[note] = coins;                         // setting a coin note
      if (!currency)                                 // if there's no currency for exchange
        break;                                       // leaving the transaction
    }
  }
  return dough;
}

export { exchanger };

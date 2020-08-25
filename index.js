const readline = require ("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// == igual a 
// != diferente a 

// === extremamente igual
// !== extremamente diferente 

// rl.question ("digite o seu comando",(res = '') => {
//     if( res.length == 0  ){
//          console.log('digita logo kct')
//     }

// })
function init ()
{rl.question ("digite logo kct: ", (res ="") =>{
    if (res.length == 0 ) {
        console.log ('anda logo porra')
        return init()
    }
}  )}

init()
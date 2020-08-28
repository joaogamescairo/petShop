const readline = require ("readline")
const comandlist = require ("./src/comandslist.json")
const dbfile = require ("./src/database")

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
function init (){
    
    rl.question ("digite logo kct: ", (res ="") =>{
    if (res.length == 0 ) {
        console.log ('anda logo porra')
        return init()
    }
    let comandovalido = false
    
    comandlist.forEach((value)=>{
        if (value.name == res ){
            comandovalido = true
        }
    })

    if (comandovalido == false){console.log ('comando invalido')
        return init()
       }
    
switch(res)
{
    case "comandos":
        console.log (` Name ${" ".repeat(14)} Description \n`)
        comandlist.forEach((value) => console.log(` ${ value.name } ${ ' '.repeat (10) } ${value.description}`))
        init()
        break;

    case 'addUser':
        const user = {
            name: '',
            age:0,
        }
        rl.question('Nome: ', name => {
            rl.question('Idade: ', age => {
                user.name = name;
                user.age = age;
                dbfile.write(user,'users')
                console.log(`O ${name} foi adicionado com sucesso!!`)
                init()
            })
        })
        break;
}
}
 
 )}

init()
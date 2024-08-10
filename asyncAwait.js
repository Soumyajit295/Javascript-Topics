/*
    async-await is a like simple javascript function but it performs asynchronus operation,To make a async function we need to use async keyword. To define an asynchronous function, we need to use the async keyword. This keyword makes sure that the function always returns a promise.
    Inside an async function, the await keyword pauses the execution of the function until the promise is resolved or rejected.
    
*/

/* Here we give an example how to use async await for some asynchronus operation */

async function fetchData(){
    try{
        const rawData = await fetch('https://fakestoreapi.com/products/')
        const data = await rawData.json()
        console.log(data)
    }
    catch(err){
        console.log('Error : ',err)
    }
}

fetchData()
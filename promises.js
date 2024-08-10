/*
 Promise: By definition, a Promise is an object that represents the eventual completion or failure of an asynchronous operation.
  
  In simple terms, a Promise is an object that contains:
  {
     PromiseState: pending,
     PromiseData: undefined
  }
 
 Once the asynchronous operation completes, the Promise object’s value changes. The PromiseState becomes fulfilled or rejected, and the PromiseData is updated with the data returned by the Promise:
  {
     PromiseState: fulfilled or rejected,
     PromiseData: returned data
  }
  
  A Promise has three states:
 
  1.Pending : The initial state, where the Promise is neither resolved nor rejected. The Promise's outcome is still unknown.
  2.Fulfilled : The state when the asynchronous operation completes successfully, and the Promise has a resulting value.
  3.Rejected : The state when the asynchronous operation fails, and the Promise has a reason for the failure.
 
  When a Promise is initiated, its state is initially pending, and the data part is undefined or unknown.
 
  As the asynchronous operation completes, two things can happen:
 
  1. If the asynchronous operation is successful, the Promise’s state becomes fulfilled, and the data part is filled with the actual data resolved by the Promise.
  2. If the asynchronous operation fails, the Promise’s state becomes rejected, and the data part is filled with the reason for the failure of the operation.

 */


function validateCart(){
    return true
}

function createOrder(){
    return new Promise(function(resolve,reject){
        if(!validateCart()){
            const err = new Error("Cart is not valid")
            reject(err)
        }
        else{
            setTimeout(()=>{
                const orderId = "123456"
                console.log("Order Id generated successfully...")
                resolve(orderId)
            },3000)
        }
    })
}

function makePayment(orderId){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const order = {name : "Kurta" , orderId : orderId, paymentStatus : "Success"}
            console.log("Payment successfull..")
            resolve(order)
        },2000)
    })
}

function showOrderDetails(order){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Here is your order details : ")
            console.log(order)
            resolve(order)
        },1000)
    })
}

createOrder()
.then(function(orderId){
    return makePayment(orderId)
})
.then(function(order){
    return showOrderDetails(order)
})
.then(function(){
    console.log("Thank you for shopping from us.")
})
.catch((err)=>{
    console.log(err.message)
})
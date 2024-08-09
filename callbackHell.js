function createOrder(procedToPayment){
    setTimeout(()=>{
        console.log("Create a order")
        procedToPayment()
    },2000)
}

function procedToPayment(showOrderDetails){
    setTimeout(()=>{
        console.log("Payment Done")
        showOrderDetails()
    },5000)
}

function showOrderDetails(greet){
    setTimeout(()=>{
        console.log("Here is your order")
        greet()
    },1000)
}

function greet(){
    console.log("Thank you for shoping from here!")
}

// Callback Hell

createOrder(()=>{
    procedToPayment(()=>{
        showOrderDetails(()=>{
            greet()
        })
    })
})
/**
 * Created by rafaxu on 19/11/2015.
 */


function placeAnOrder(orderNumber){
    console.log("Customer order:", orderNumber);

    cookAndDeliverFood(function(){
        console.log("Deliver Food order", orderNumber);
    })

}

function cookAndDeliverFood(callback){
    setTimeout(callback,5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
/**
 * Created by rafaxu on 20/11/2015.
 */

var Rafa ={
    printMsg: function () {
        console.log("I am Rafa");
        console.log(this === Rafa);
    }
}

Rafa.printMsg()

function doSomethingWorthless(){
    console.log("I am here");
    console.log(this===global)
}

doSomethingWorthless()
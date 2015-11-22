/**
 * Created by rafaxu on 22/11/2015.
 */

function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + "give 1 life to " + targetPlayer.name)
    }
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("bucky:" + Bucky.life);
console.log("Wendy:" + Wendy.life);

User.prototype.uppercut = function uppercut (targetPlayer){
    targetPlayer.life += 3;
    console.log(this.name + " just uppercut "+targetPlayer.name);
}

Wendy.uppercut(Bucky);
console.log("bucky:" + Bucky.life);
console.log("Wendy:" + Wendy.life);

User.prototype.matic = 60;
console.log(Bucky.matic);
console.log(Wendy.matic);

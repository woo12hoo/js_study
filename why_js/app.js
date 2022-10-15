const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("Hello! " + otherPersonsName + " Nice to meet you! ");
    },
};

console.log(player.name);
player.sayHello("Joy");
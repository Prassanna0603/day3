//forloop
var array =[1,2,3,4,5,"car","bus"];
for(let i=0; i < array.length; i++){
    console.log(i);
}

var array =[1,2,3,4,5,"car","bus"];
for(let i=0; i < array.length-1; i++){
    console.log(i);
}

for(let i=0; i<10; i++){
    console.log(i)
}

//for in ->array,obj
var obj = {
    name:"prassanna",
    city:"natham"
}
for (var key in obj){
    console.log(key)
    console.log(obj.name,obj.city)
}

//for of -> array

var array =[1,2,3,4,5,"car","bus"];
for(var index of array){
    console.log(index)
}

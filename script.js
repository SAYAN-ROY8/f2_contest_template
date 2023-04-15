/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  
 arr.map((e)=>{
   if(e.profession=='developer'){
     console.log(e.name);
  }
  
});

}
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((s)=>{
    if(s.profession=='developer'){
console.log(s.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"} );
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
 // for(var i= 0; i<arr.length;i++){
    //var m="admin";
    //if(arr[i].profession==m){
      arr.splice(2,1);
      console.log(arr);
 //   }
 // }
}

function concatenateArray() {
  //Write your code here, just console.log
  var b=[{ id: 5, name: "func", age: "108", profession: "chopdeveloper" }];
  var c= arr.concat(b);
  console.log(c);
}
 

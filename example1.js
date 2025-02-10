// checking age and citizenship for voting.

let age=19;
let iscitizen=false;

if(!age>=18){
    if(iscitizen){
        console.log("you can vote");
    }else{
        console.log("you are not a citizen, so you cannot vote.");
    }
}else{
    console.log("you are underage.");
}
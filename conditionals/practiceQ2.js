// given a student's marks, determine their grade based on this scale:
// 90+     ->  A 
// 80-89   ->  B 
// 70-79   ->  C 
// 60-69   ->  D 
// below 60 -> F 

let grade=78;

if(grade>=90){
    console.log("A");
}else if(grade>=80){
    console.log('B');
}else if(grade>=70){
    console.log('C');
}else if(grade>=60){
    console.log('D');
}else{
    console.log('F');
}
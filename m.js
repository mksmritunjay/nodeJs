// const path=require('path');
// console.log(__dirname);

// console.log(__filename);
// console.log(path.basename(__filename));
//Now time to play with the process
//console.log(process.argv);
// var flag=process.argv.indexOf('--user');
// console.log(flag);
// process.stdout.write('Ask a question ');
// process.stdin.on('data',function(answer){
//     console.log(answer.toString());
//     process.exit();

// });
//9
// var  readline = require('readline');
// var RL=readline.createInterface(process.stdin,process.stdout);
// RL.question('What is your name ',(name)=>{
//     console.log(`My name is`+(name));
    
// });

//10
// var readLine=require('readline');
// var util=require('util');
// var RL=readLine.createInterface(process.stdin,process.stdout);
// RL.question('What is your name',(name)=>{
//     RL.setPrompt(`${name} what old are you`);
//     RL.prompt();
//     RL.on('line',(age)=>{
//         if(age<18){
//             util.log(`${name.trime()} because you are ${age} year old,you can't apply`);  
//             RL.close();
//         }
//         else{
//             util.log(`${name} is fine age to eligble to ${age}year old`);
//             RL.close();        
//         }
//     })
// })
//--------------------11
const a1=require('./lib');
console.log(a1.rock);





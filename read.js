const fs=require('fs');
// fs.readdir('.',(err,data)=>{
//     if(err)return err;
//     console.log(data); 
// });
fs.readFile('D://javamks//AWS//a.txt','UTF-8',(err,data)=>{
    if(err)return err;
    console.log(data);
});

const axios=require('axios');
let username='mksmritunjay';
axios.get('https://api.github.com/user/'+username).then((res)=>{
    console.log(res.data.blog);
    
}).catch((err)=>{
    console.log(err);
});
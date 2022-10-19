//json -> javascript object notation
const myPortfolio =[
    {
        name : "Prassanna",
        age : 20,
        mailid : "prassanna@gmail.com",
        contact : 7639569710,
        native : "natham",
        address : "velampatti post, natham taluk,dindugal district"
    },
    {
        qualification :"b.sc computer science",
        internship : "guvi",
        skil :["html","css","javascript"]
    }
]

console.log( myPortfolio);
 const myJson = JSON.stringify(myPortfolio);
 console.log(myJson);

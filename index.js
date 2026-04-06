import express from "express";

const app=express();
const PORT =3000;
app.use(express.json())


let users =[{id:1,name: "salma ahmed",email:"salma@example.com", password: "password123", address: "Cairo, Egypt" , },
             {id:2,name:"omar ali" , email: "omar@example.com", password: "securePass456", address: "Giza, Egypt" } ,
             {id:3,name:"sara mohamed" ,email:"sara@example.com", password: "mypassword789", address: "Alexandria, Egypt" ,} ,
];

let medicines=[{ medicineName:"panadol" ,Category:"analegsic"  ,price:50  ,StockQuantity:100 , },
    {     medicineName: "augmentin" ,Category:"antibiotic"  ,price:120  ,StockQuantity:45 , },
    {     medicineName: "catafast" ,Category:"painkiller"  ,price:35  ,StockQuantity:60 , },

];


let  carts =[{userId:1 ,Items:"panadol" ,TotalAmount:85 },
     {userId:2 ,Items: "augmentin",TotalAmount:120 },
    {userId: 3,Items:"panadol" ,TotalAmount:50 },


];
          




//get-all
app.get("/api/users",(req,res)=>{

res.json(users);


});

app.get("/api/medicines",(req,res)=>{

res.json(medicines);


});

app.get("/api/carts",(req,res)=>{

res.json(carts);
  
}
);


//get-single
app.get("/api/users/:id",(req,res)=>{
const id=Number(req.params.id);
const user=users.find(p=>p.id===id);
res.json(user);


}
);
//add
app.post("/api/medicines",(req,res)=>{
    const {medicineName ,Category ,price ,StockQuantity}=req.body;
    console.log(req.body);
    const newid=medicines.length+1;
    const medicine={id:newid,
        medicineName ,
        Category ,
        price ,
        StockQuantity};
        medicines.push(medicine);
        res.status(201).json({success:true,medicine})
})


app.put("/api/medicines/:name",(req,res)=>{
    let medicineName=req.params.name;
    let {price,StockQuantity}=req.body;
let medicine=medicines.find(p=>p.medicineName===medicineName);
let updatedmedicine={price,StockQuantity};
Object.assign(medicine,updatedmedicine)
res.json({success:true,medicine});




});


app.delete("/api/medicines/:name",(req,res)=>{
   let medicineName=req.params.name;
    medicines =medicines.filter((p)=>p.medicineName!==medicineName);
    res.json({success:true,medicines});

});







app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});














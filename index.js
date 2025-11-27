import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

let myusername = process.env.database ;
console.log("value is " , myusername);


console.log("begining of a backend project");
console.log("nodemon is working by auto refreshing my server");

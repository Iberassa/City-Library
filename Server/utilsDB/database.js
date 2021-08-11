const MongoClient = require("mongodb").MongoClient;


const dburl = "mongodb://localhost:27017";
const dbName = "cityLibrary-db";
let _db; // private variable 


const mongoConnect = function(callback){
    MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(client=>{
        _db = client.db(dbName);
        callback();
    })
    .catch(error=>{
        console.log(error);
        throw new Error('DB connection failed...')
    })
}

const getDB = ()=>{
    if(_db){
        return _db;
    }else{
        throw new Error('DB connect failed...')
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;


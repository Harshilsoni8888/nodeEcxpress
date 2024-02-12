const http = require('http')
const fs = require('fs')
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const url ='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2'
const client = new MongoClient(url);
const database = 'student'
var app = express();
var response;



async function getData(){

	console.log("getData")
	let connection = await client.connect()
	let db = connection.db(database);
	let collection = db.collection('items');
	response = await collection.find({}).toArray();
	console.log("end")
	return response;
}	

async function addData(nam,rl,depo){
	console.log("getData")
	let connection = await client.connect()
	let db = connection.db(database);
	let collection = db.collection('items');
	collection.insertOne({
		name : nam,
		rollno: rl,
		dept :depo,

	})
	response = await collection.find({}).toArray();
	console.log("end")
	return response;
}

async function deleteData(nm){
	let connection = await client.connect();
	let db = connection.db(database);
	let collection = db.collection('items');
	collection.deleteOne({
		name:nm
	})
	response = collection.find({}).toArray();
	return response;
}

app.get('/deleteData', function(req,res){
	console.log(req.query.name);

	let name=req.query.name;
	deleteData(name).then(data=>{
		res.render('delete.ejs',{ response : data})
	})
})


app.get('/add', function(req,res){
	res.render('add.ejs',{})
})

app.get('/addData', function(req,res){
	console.log(req.query.name)
	console.log(req.query.rollno)
	console.log(req.query.dept)

	let name=req.query.name;
	let rollno=req.query.rollno;
	let dept=req.query.dept
	addData(name,rollno,dept).then(data=>{
		res.render('index.ejs',{response : data})
	})

})

app.get('/display',function(req,res){
	getData().then(data=>{
		res.render('index.ejs',{response : data})
	})
})

app.listen(8082);




const http = require('http')
const fs = require('fs')
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const url = '';
const client = new MongoClient(url);
const database = '';
var app = express();
var response;

async function getData(){

	   let console.log("getData");
	   let connection = await client.connect();
	   let db = connection.db(database);
	   let collection = db.collection('items');
	   response = await collection.find({}).toArray();
	   return response;
}

async function addData(nm,rl){

	   let console.log("addData");
	   let connection = await client.connect();
	   let db = connection.db(database);
	   let collection = db.collection('items');
	   collection.insertOne({
	   		name :nm,
	   		roll :rl,
	   })
	   response = await collection.find({}).toArray();
	   return response;
}

async function deleteData(nmm){

	   let console.log("deleteData");
	   let connection = await client.connect();
	   let db = connection.db(database);
	   let collection = db.collection('items');
	   collection.deleteOne({
	   		name :nmm,
	   })
	   response = await collection.find({}).toArray();
	   return response;
}

app.get('/add' function(res,req){
	 res.render('index.ejs',{})
})

app.get('/addData' function(req,res){

		console.log(req.query.name);
		console.log(req.query.roll);

		let name = req.query.name;
		let roll = req.query.roll;
		getData(name,roll).then(data=>{
			res.render('add.ejs', { response : data})
		})
})

app.get('/deleteData' function(req,res){

		console.log(req.query.name);
		let name = req.query.name;
		getData(name).then(data=>{
			res.render('delete.ejs', { response : data})
		})
})

app.get('/displayData' function(res,req){
		getData().then(data=>{
			res.render('index.ejs', {response : data})
		})
})

app.listen(8081);
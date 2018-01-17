// server.js
// set up ========================
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser=require('body-parser');
var bcrypt =require('bcryptjs');
var jwt =require('jwt-simple');
var ObjectID = require('mongodb').ObjectID;
var db=null;
var JWT_SECRET = 'blayblay';
// create our app w/ express
MongoClient.connect("mongodb://localhost:27017/mittens",function(err,dbconnec)
{
if(!err)
{
console.log("we are connected");
db=dbconnec;
}
}
);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/meows',function(req,res,next)
{
db.collection('moews',function(err,moewsCollection)
{
moewsCollection.find().toArray(function (err, cursor) {
  var dataArr = cursor;
  console.log(dataArr);
return res.send(cursor);
});
});
});

app.get('/usersCollection',function(req,res,next)
{
db.collection('users',function(err,moewsCollection)
{
moewsCollection.find().toArray(function (err, cursor) {
  var dataArr = cursor;
return res.send(cursor);
});
});
});


app.post('/meows',function(req,res,next)
{
var token = req.headers.authorization;
var user = jwt.decode(token,JWT_SECRET);
var date = new Date();
var myVar =[];
db.collection('moews',function(err,moewsCollection)
{
var newRec= {

text: req.body.newVar,
user:user._id,
timeIs:date,
commentLists:myVar
};
moewsCollection.insert(newRec, {w:1},function(err){
return res.send();
});
});
// console.log(req.body);
});
app.post('/meows/addcomment',function(req,res,next)
{
  var token = req.headers.authorization;
  var user = jwt.decode(token,JWT_SECRET);
  var date = new Date();
  db.collection('moews',function(err,usersCollection)
{


  usersCollection.update(
    { _id:ObjectID(req.body.comment.postID)},
     { $addToSet: {commentLists: {comment:req.body.comment.commentText,
                                  commentby:user._id,
                                  timeIS: date
                                  }
                                } }


)

});
return res.send();

});
app.post('/meows/removecomment',function(req,res,next)
{
  var token = req.headers.authorization;
  var user = jwt.decode(token,JWT_SECRET);
  var commentBy = req.body.comment.commentby;
  var commentText = req.body.comment.commentText;
  db.collection('moews',function(err,usersCollection)
{
  usersCollection.update(
            { _id:ObjectID(req.body.comment.postID)},
             { $pull:
                      {commentLists:
                        {comment:req.body.comment.commentText,
                         commentby:user.username
                        }
                        }
              }
  )
  });
return res.send();

});
app.post('/users',function(req,res,next)
{
db.collection('users',function(err,usersCollection)
{
bcrypt.genSalt(10,function(err,salt){
bcrypt.hash(req.body.password,salt,function(err,hash){
var newuser={
username: req.body.username,
password: hash,
profileimg:req.body.profileimg
};
usersCollection.insert(newuser, {w:1},function(err){
console.log('done hogayea user entry 0');
console.error(err);
res.send();
console.error(err);
console.log('done hogayea user entry');
});
});
});
});
});
app.put('/meows/remove',function(req,res,next)
{
var token = req.headers.authorization;
var user = jwt.decode(token,JWT_SECRET);
db.collection('moews',function(err,moewsCollection)
{
var todel=req.body.varTOremove._id;
moewsCollection.remove({_id:ObjectID(todel),user:user._id}, {w:1},function(err){
return res.send();
});
});
// console.log(req.body);
});
app.put('/users/login',function(req,res,next)
{
db.collection('users',function(err,usersCollection)
{
usersCollection.findOne({username:req.body.username},function(err,user)
{
bcrypt.compare(req.body.password,user.password,function(err,result){
if(result){
console.log('we are here 3');
var token =jwt.encode(user,JWT_SECRET);
return res.json({token:token,profileimg:user.profileimg});
console.log('we are here 4');
}else
{
console.log('we are here 5');
return res.status(400).send();
}
});
});
});
});
// listen (start app with node server.js) ======================================
app.listen(3000,function(){
console.log("App listening on port : ");
});

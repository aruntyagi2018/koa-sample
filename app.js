const koa = require('koa');
//const parse = require('co-body');
const BodyParser  = require('koa-bodyparser');
const apiRouter = require('./routers/api');
const  mongoose=require('mongoose');
const app = new koa();


mongoose.connect('mongodb://localhost/mean-crud')
.then(() =>  console.log('connection successful'))
.catch((err) => console.error(err));
/*
app.use(function(){
    this.request.body = parse(this);
}); */
app.use(BodyParser());

app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());




const port = process.env.PORT || 3000;
app.listen(port,function(){
const logger = console.log;
logger('server is listining on port : ',port);
});

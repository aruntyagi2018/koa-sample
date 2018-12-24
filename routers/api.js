 const Router = require('koa-router');

const Book = require('../models/book');
const  commonUtility  = require('../utils/common-utility');
const router = new Router();

router.get('/api', async (ctx,next) => {
    console.log('koa router get method');
    await commonUtility.getTestData()
    .then(res => {
        ctx.body = res;
    })
    .catch(err =>
    {
        ctx.body = err;
    })
    
    //yield next;
});

router.get('/api/:bookId',async ctx =>{
console.log(ctx.params.id);
const searchedBook = await Book.findById(ctx.params.bookId);
    ctx.body = searchedBook;
});

router.post('/api/save', async (next) => {
    try{
        console.log('post save method', ctx.request.body);
        const allBooks = await Book.find({});
        ctx.body = allBooks; 
        /* await Book.create(ctx.request.body);
        const allBooks = await Book.find({});
        ctx.body = allBooks; */
    }
    catch(err){
        res.status(404).send(err);
    }
});

router.put('/api/:bookId', async ctx => {
    await Book.findByIdAndUpdate(ctx.params.bookId,ctx.body);
    const allBooks = await Book.find({});
    ctx.body = allBooks;


});
router.delete('/api/:bookId', async ctx =>{
    await Book.findByIdAndDelete(ctx.params.bookId);
    const allBooks = await Book.find({});
    ctx.body = allBooks;
});
module.exports = router; 
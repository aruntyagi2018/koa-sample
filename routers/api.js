 const Router = require('koa-router');

const Book = require('../models/book');
const router = new Router();

router.get('/api', async (ctx) => {
    console.log('koa router get method');
    const books=  await Book.find({});
    ctx.body = books;
});

router.get('/api/:bookId',async ctx =>{
console.log(ctx.params.id);
const searchedBook = await Book.findById(ctx.params.bookId);
    ctx.body = searchedBook;
});

router.post('/api/save', async (ctx) => {
    try{
        console.log('post save method', ctx.request.body);
        await Book.create(ctx.request.body);
        const allBooks = await Book.find({});
        ctx.body = allBooks;
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
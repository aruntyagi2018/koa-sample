const commonUtility = {

    getTestData : function()
    {
        const testPromise = new Promise((resolve, reject) => {
            setInterval(function () { 
                jsondata= [{bookId: '1',name:'testBook'},
                            {bookId: '2',name:'koa Book'} ,
                            {bookId: '3',name:'react Book'}
                        ];

                  resolve(jsondata);
                },2000);
                });
              return testPromise;  
    }
}
module.exports = commonUtility;
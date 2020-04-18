const Item = require('../models/item');
const mongoose = require('mongoose');


//must connect to database
mongoose.connect('mongodb://localhost:27017/netless', { useNewUrlParser: true, useUnifiedTopology: true}, (error) =>{
    if (!error) {
        console.log('success');
    } else {
        console.log('error connecting to database.');
    }   
});


// seed some data in db
var items = [
    //done
    new Item({
        imagePath: "https://lh3.googleusercontent.com/pbQ838bYGyDDlGWNE8TMj9hrUG6U8-0kpiXZwqoVTg6t4V5Yys-MTP2ZLviWQQTpu29FVhrdVQ_2M1hDlKUgSjW58nZczYIJbWZFkLvqXRLfp0ngnGU8uVy3w0Yaj9Fq44q3Ji51kQ=w2400",
        itemName: "Toilet Paper",
        itemPrice: '10',
        itemCat: "cleaning",
        description: "This is in limited supply, buy now!"
    }),
    //done
    new Item({
        imagePath: "https://lh3.googleusercontent.com/KyXUiSxZg-e5k1CkwoYMU_so1K2QVg560TjdYf0RSNPgcHwtEFSNm4YVEchpTWmf1XOetVJjbOMQj83LWwUqm-MBPIeu74lymhwVeIQxU5klMs3dPKmj1c0ur2Ax7YkiWbfke_fPWg=w2400",
        itemName: "Hand Sanitizer",
        itemPrice: '5',
        itemCat: "cleaning",
        description: "Clean your hands often with this product!"
    }),

    //done
    new Item({
        imagePath: "https://lh3.googleusercontent.com/-qxVOiVYjEG5Nizi0A9CZsqnOBvtfUV-WGyKIualApMCTaobXHWX5L59vjSvURqUwhpibYRYU2i-ZVTG-XipS2UQR6v3P_w5Mz0whDH-PnDocAHJwPwlZn0Gb-z-HDCypyx0P6GtSA=w2400",
        itemName: "Disinfectant Spray",
        itemPrice: '6',
        itemCat: "cleaning",
        description: "Smells great, too!"
    }),


    /*
    new Item({
        imagePath: "https://lh3.googleusercontent.com/pbQ838bYGyDDlGWNE8TMj9hrUG6U8-0kpiXZwqoVTg6t4V5Yys-MTP2ZLviWQQTpu29FVhrdVQ_2M1hDlKUgSjW58nZczYIJbWZFkLvqXRLfp0ngnGU8uVy3w0Yaj9Fq44q3Ji51kQ=w2400",
        itemName: "Face Mask",
        itemPrice: 2,
        itemCat: "cleaning",
        description: "Stay safe when you go out with this!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/pbQ838bYGyDDlGWNE8TMj9hrUG6U8-0kpiXZwqoVTg6t4V5Yys-MTP2ZLviWQQTpu29FVhrdVQ_2M1hDlKUgSjW58nZczYIJbWZFkLvqXRLfp0ngnGU8uVy3w0Yaj9Fq44q3Ji51kQ=w2400",
        itemName: "Disposable Gloves",
        itemPrice: 1,
        itemCat: "cleaning",
        description: "Sometimes, you just need them. Order now!"
    }),

    new Item({
        imagePath: "https://lh3.googleusercontent.com/pbQ838bYGyDDlGWNE8TMj9hrUG6U8-0kpiXZwqoVTg6t4V5Yys-MTP2ZLviWQQTpu29FVhrdVQ_2M1hDlKUgSjW58nZczYIJbWZFkLvqXRLfp0ngnGU8uVy3w0Yaj9Fq44q3Ji51kQ=w2400",
        itemName: "Broom",
        itemPrice: 4,
        itemCat: "cleaning",
        description: "Keep those floors clean with this product, order now!"
    }
)*/];

var done = 0;
for (var i = 0; i < items.length; i++) {
    items[i].save(function (err, result) {
        done++;
        if(done === items.length) {
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}
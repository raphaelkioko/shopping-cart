var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/04/video-game-console-2202531__340.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/12/video-game-console-2202609__340.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Also awesome? But of course it was better in vanilla...',
        price: 20
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/08/video-game-console-2202571__340.jpg',
        title: 'Call of Duty Video Game',
        description: 'Quite wonderful Game!!!',
        price: 30
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/12/video-game-console-2202616__340.jpg',
        title: 'Minecraft Video Game',
        description: 'Awesome Game!!!',
        price: 15
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/10/video-game-console-2202594__340.jpg',
        title: 'Dark Souls 3 Video Game',
        description: 'I died!!',
        price: 50
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/05/video-game-console-2202546__340.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/14/video-game-console-2202628__340.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Also awesome? But of course it was better in vanilla...',
        price: 20
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/15/video-game-console-2202639__340.jpg',
        title: 'Call of Duty Video Game',
        description: 'Quite wonderful Game!!!',
        price: 30
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/16/video-game-console-2202650__340.jpg',
        title: 'Minecraft Video Game',
        description: 'Awesome Game!!!',
        price: 15
}),
  new Product({
        imagePath: 'https://cdn.pixabay.com/photo/2017/04/04/18/09/video-game-console-2202579__340.jpg',
        title: 'Dark Souls 3 Video Game',
        description: 'I died!!',
        price: 50
})
];

var done = 0;
for (var i=0; i < products.length; i++){
        products[i].save(function (err,result) {
                done++;
                if(done == products.length){
                        exit();
                }
        });
}

function exit() {
        mongoose.disconnect();
}


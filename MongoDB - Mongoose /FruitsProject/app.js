const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/fruitsDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) console.error(err);
    else console.log("Connected to the mongodb");
  }
);

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Peaches forever.",
});

// fruit.save();

const pineapple = new Fruit({
  name: "Pineaplle",
  rating: 10,
  review: "Great Fruit."
})

// pineapple.save();

const strawberry = new Fruit({
  name: "Strawberry",
  rating: 8,
  review: "Gaim Another Form"
})

strawberry.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitsSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 3,
  review: "The best fruit!",
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Henshin!",
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Henshin!",
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if(err) console.log(err);
//   else console.log("Successfully saved all the fruits to fruitsDB");
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "5fabdfaa14f1fc464e9e6e6d"}, {name: "Peach"}, function(err) {
//   if(err) console.log(err);
//   else console.log("Successfully updated the document!");
// });

Person.updateOne({name: "John"}, {favouriteFruit: strawberry}, function(err) {
  if(err) console.log(err);
  else console.log("Succesfully updated the document!");
})

// Fruit.deleteOne({name: "Peach"}, function(err) {
//   if(err) console.log(err);
//   else console.log("Success");
// });

// Person.deleteMany({name: "John"}, function(err) {
//   if(err) console.log(err);
//   else console.log("Success");
// });

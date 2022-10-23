const app = require(`../`);
const logger = require(`common/src/classes/Logger`).from(`controllers/drinks.js`);
const Drink = require(`common/src/models/Drink`);

const drinks = [];

// list all
app.get(`/drinks`, (req, res) => {
  const log = logger.setMethod(`GET /drinks`);
  log.log(`endpoint called`);

  res.set(`Content-Type`, `application/json; charset=utf-8`);
  res.send(JSON.stringify(drinks, null, 2));
});

// get one
app.get(`/drinks/:drinkId`, (req, res) => {
  const log = logger.setMethod(`GET /drinks/${req.params.drinkId}`);
  log.log(`endpoint called`);

  const drink = drinks.find(drink => drink.drinkId === req.params.drinkId);

  res.set(`Content-Type`, `application/json; charset=utf-8`);
  res.send(JSON.stringify(drink, null, 2));
});

// create
app.post(`/drinks`, (req, res) => {
  const log = logger.setMethod(`POST /drinks`);
  log.log(`endpoint called`);

  const newDrink = Drink.from()
    .setName(req.body.name)
    .setPrice(req.body.price)
    .setCalories(req.body.calories);

  drinks.push(newDrink);
  res.set(`Content-Type`, `application/json; charset=utf-8`);
  res.send(JSON.stringify(newDrink, null, 2));
});

// update
app.put(`/drinks/:drinkId`, (req, res) => {
  const log = logger.setMethod(`PUT /drinks/${req.params.drinkId}`);
  log.log(`endpoint called`);

  const editedDrinkIndex = drinks.findIndex(drink => drink.drinkId === req.params.drinkId);

  drinks[editedDrinkIndex] = {
    ...drinks[editedDrinkIndex],
    ...{
      ...!!req.body.calories && { calories: req.body.calories },
      ...!!req.body.name && { name: req.body.name },
      ...!!req.body.price && { price: req.body.price },
    }
  };

  res.set(`Content-Type`, `application/json; charset=utf-8`);
  res.send(JSON.stringify(drinks[editedDrinkIndex], null, 2));
});

// delete
app.delete(`/drinks/:drinkId`, (req, res) => {
  const log = logger.setMethod(`DELETE /drinks/${req.params.drinkId}`);
  log.log(`endpoint called`);

  const deletedDrinkIndex = drinks.findIndex(drink => drink.drinkId === req.params.drinkId);
  drinks.splice(deletedDrinkIndex, 1);

  res.sendStatus(200);
});

logger.log(`loaded drinks.js succesfully :)`);
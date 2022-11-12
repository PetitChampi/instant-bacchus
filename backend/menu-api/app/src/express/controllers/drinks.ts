import { Logger, Drink } from "common";

import app from "@/src/express";
import prisma from "@/src/prisma"

const logger = Logger.from(`controllers/drinks.js`);

// list all
app.get(`/drinks`, (req, res) => {
  const log = logger.setMethod(`GET /drinks`);
  log.log(`endpoint called`);

  Promise.resolve()
    .then(() => prisma.drink.findMany({
      where: {
        deletedAt: null
      }
    }))
    .then((allDrinks) => res
      .set(`Content-Type`, `application/json; charset=utf-8`)
      .send(JSON.stringify(allDrinks, null, 2))
    )
    .catch((err) => {
      res
        .set(`Content-Type`, `application/json; charset=utf-8`)
        .send(JSON.stringify([]));

      logger.log(JSON.stringify(err, null, 2));
      console.error(err);
    });  
});

// get one
app.get(`/drinks/:drinkId`, (req, res) => {
  const log = logger.setMethod(`GET /drinks/${req.params.drinkId}`);
  log.log(`endpoint called`);

  Promise.resolve()
    .then(() => prisma.drink.findFirst({
      where: {
        id: req.params.drinkId,
        deletedAt: null
      },
    }))
    .then((oneDrink) => res
      .set(`Content-Type`, `application/json; charset=utf-8`)
      .send(JSON.stringify(oneDrink, null, 2))
    )
    .catch((err) => {
      res
        .status(500)
        .send(JSON.stringify(err, null, 2));

      logger.log(JSON.stringify(err, null, 2));
      console.error(err);
    });  
});

// create
app.post(`/drinks`, (req, res) => {
  const log = logger.setMethod(`POST /drinks`);
  log.log(`endpoint called`);

  const newDrink = Drink.from()
    .setName(req.body.name)
    .setPrice(req.body.price)
    .setCalories(req.body.calories);

  Promise.resolve()
    .then(() => prisma.drink.create({ data: newDrink }))
    .then((savedDrink) => res
      .set(`Content-Type`, `application/json; charset=utf-8`)
      .send(JSON.stringify(savedDrink, null, 2))
    )
    .catch((err) => {
      res
        .status(500)
        .send(JSON.stringify(err, null, 2));

      logger.log(JSON.stringify(err, null, 2));
      console.error(err);
    });  
});

// update
app.put(`/drinks/:drinkId`, (req, res) => {
  const log = logger.setMethod(`PUT /drinks/${req.params.drinkId}`);
  log.log(`endpoint called`);

  Promise.resolve()
    .then(() => prisma.drink.updateMany({
      where: {
        id: req.params.drinkId,
        deletedAt: null
      },
      data: {
        ...!!req.body.name && { name: req.body.name },
        ...!!req.body.price && { price: req.body.price },
        ...!!req.body.calories && { calories: req.body.calories }
      }
    }))
    .then(() => res.send(200))
    .catch((err) => {
      res
        .status(500)
        .send(JSON.stringify(err, null, 2));

      logger.log(JSON.stringify(err, null, 2));
      console.error(err);
    });
});

// delete
app.delete(`/drinks/:drinkId`, (req, res) => {
  const log = logger.setMethod(`DELETE /drinks/${req.params.drinkId}`);
  log.log(`endpoint called`);

  Promise.resolve()
    .then(() => prisma.drink.updateMany({
      where: {
        id: req.params.drinkId,
        deletedAt: null
      },
      data: {
        deletedAt: (new Date()).toISOString()
      }
    }))
    .then(() => res.send(200))
    .catch((err) => {
      res
        .status(500)
        .send(JSON.stringify(err, null, 2));

      logger.log(JSON.stringify(err, null, 2));
      console.error(err);
    });
});

logger.log(`loaded drinks.js succesfully :)`);

export default {};
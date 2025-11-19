import express from "express";
import Character from "../models/Character.js";
const router = express.Router();

import charController from "../controllers/characters.js";

// creating a patch route to specfically only flip the favorites property
router.patch("/:id/fav", charController.toggleFavorites);

router
  .route("/:id")
  .get(charController.getOne)
  .put(charController.editCharacter)
  .delete(charController.deleteCharacter);

router
  .route("/")
  .post(charController.createCharacter)
  .get(charController.getAll);

export default router;

import express from "express";
import { AuthorController } from "../controllers/author.controllers.js";

const router = express.Router();

router.get("/", AuthorController.getAuthors);
router.get('/:name', AuthorController.getAuthorByName)

export default router;

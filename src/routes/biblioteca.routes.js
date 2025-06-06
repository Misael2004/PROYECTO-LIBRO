import express from 'express'
import { createBook, getBookAvailable, listBook, notAvailableBooks } from '../controllers/listBook.controllers.js'


const router = express.Router()

router.get('/', listBook)
router.post('/', createBook)
router.get('/available', getBookAvailable)
router.get('/notAvailable', notAvailableBooks)

export default router
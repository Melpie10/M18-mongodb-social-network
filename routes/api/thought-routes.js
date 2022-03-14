const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
  } = require('../../controllers/Thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// /api/Thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  updateThought
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThought)
  //.post(addThought)

// api/thoughts/<thoughtId>  
router
.route('/:thoughtId')
.get(getThoughtById)
.delete(removeThought)
.put(updateThought);

// /api/thoughts/<userId>
router.route('/:UserId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeReaction);


// api/thoughts/<thoughtId/reactions>  
router
.route('/:thoughtId/reactions')
.post(addReaction);


router
.route('/:thoughtId/reactions/reactionId')
.delete(removeReaction);


module.exports = router;
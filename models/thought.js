const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    thougthText: {
      type: String,
      required: true,
      maxLength: 280
    },
    createdBy: {
        type: String,
        required: true,
      },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reaction'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of reactions on retrieval
// ThougthSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

// create the thought model using the ThoughtSchema
const Thought = model('thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;
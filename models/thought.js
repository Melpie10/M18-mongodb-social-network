const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  }
);


const ThoughtSchema = new Schema(
  {
    thoughtText: {
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
    ],
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

//get total count of reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// create the thought model using the ThoughtSchema
const Thought = model('thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;
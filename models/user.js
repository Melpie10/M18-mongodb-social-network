const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// get total count of friends and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// create the User model using the UserSchema
const User = model('user', UserSchema);

// export the User model
module.exports = User;
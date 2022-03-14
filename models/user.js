const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1024,
    }
  }, {
  timestamps: true,
}
);

// 여기서 User라고 단수형으로 지정했지만, 몽고디비에 데이터베이스로 저장될 때 콜렉션 이름은 users로 복수형으로 된다.
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
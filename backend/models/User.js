const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    level: {type: Number, default: 0},
    score: {type: Number, default: 0}
});

UserSchema.statics.addUser = async (newUser) => {
    const user = new User(newUser);
    const password = await User.setPassword(user.password);
    user.password = password;
    return await user.save();
};

UserSchema.statics.setPassword = async (password) => {
    return await bcrypt.genSalt(10).then(async salt => {
        return await bcrypt.hash(password, salt)
            .then(async hash => await hash)
    }).catch(async err => await next(err));
};

UserSchema.statics.comparePassword = async (passw, user) => {
    return await bcrypt.compare(passw, user.password)
      .then(async isMatch => {
        return await {success: isMatch}
      })
      .catch(async err => {
        return await {success: false, error: err};
      });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;

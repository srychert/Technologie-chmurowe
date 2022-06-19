const { Schema, model } = require('mongoose');


const dividerSchema = new Schema({
  number: { type: Number, unique: true },
  dividers: [Number],
});

module.exports = model('Divider', dividerSchema);
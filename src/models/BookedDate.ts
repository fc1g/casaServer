import mongoose, { Schema } from 'mongoose';

const errorMessage = 'A bookedDate must have a';

const bookedDateSchema = new Schema({
  initialDate: {
    type: Date,
    required: [true, `${errorMessage} initialDate`],
  },
  deadlineDate: {
    type: Date,
    required: [true, `${errorMessage} deadlineDate`],
  },
});

export default mongoose.model('BookedDate', bookedDateSchema);

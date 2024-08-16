import mongoose, { Document, Schema } from 'mongoose';

interface ImageType extends Document {
  data: Buffer;
  contentType: string;
}

const imageSchema = new Schema({
  data: Buffer,
  contentType: String,
});

export default mongoose.model<ImageType>('Image', imageSchema);

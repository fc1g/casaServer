import mongoose, { Document, Schema } from 'mongoose';

interface ImageType extends Document {
  data: Buffer;
  name: string;
  contentType: string;
}

const imageSchema = new Schema({
  data: Buffer,
  name: String,
  contentType: String,
});

export default mongoose.model<ImageType>('Image', imageSchema);

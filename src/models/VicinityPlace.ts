import mongoose, { Schema } from 'mongoose';

const errorMessage = 'A vicinityPlace must have a';

const vicinityPlaceSchema = new Schema({
  info: {
    title: {
      en: {
        type: String,
        required: [true, `${errorMessage} english version of the title`],
      },
      pl: {
        type: String,
        required: [true, `${errorMessage} polish version of the title`],
      },
      es: {
        type: String,
        required: [true, `${errorMessage} spanish version of the title`],
      },
    },
    briefInfo: {
      en: {
        type: String,
        required: [true, `${errorMessage} english version of the briefInfo`],
      },
      pl: {
        type: String,
        required: [true, `${errorMessage} polish version of the briefInfo`],
      },
      es: {
        type: String,
        required: [true, `${errorMessage} spanish version of the briefInfo`],
      },
    },
    text: {
      en: {
        type: String,
        required: [true, `${errorMessage} english version of the text`],
      },
      pl: {
        type: String,
        required: [true, `${errorMessage} polish version of the text`],
      },
      es: {
        type: String,
        required: [true, `${errorMessage} spanish version of the text`],
      },
    },
    imgAlt: {
      en: {
        type: String,
        required: [true, `${errorMessage} english version of the imgAlt`],
      },
      pl: {
        type: String,
        required: [true, `${errorMessage} polish version of the imgAlt`],
      },
      es: {
        type: String,
        required: [true, `${errorMessage} spanish version of the imgAlt`],
      },
    },
  },
  img: {
    type: String,
    required: [true, `${errorMessage} img`],
    unique: true,
  },
  routeLink: {
    type: String,
    required: [true, `${errorMessage} routeLink`],
  },
  distance: {
    type: Number,
    required: [true, `${errorMessage} distance`],
  },
  coords: {
    type: [Number, Number],
    required: [true, `${errorMessage} coords`],
  },
});

export default mongoose.model('VicinityPlace', vicinityPlaceSchema);

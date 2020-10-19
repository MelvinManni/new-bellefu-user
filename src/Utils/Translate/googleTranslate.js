const apiKey = process.env.REACT_APP_TRANSLATE_API;

export const googleTranslate = require("google-translate")(apiKey);

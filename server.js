import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cloudinary from "cloudinary";
import Stripe from "stripe";

connectDB();

export const stripe = new Stripe(process.env.STRIPE_API_SECRET);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(
    `Server listening on port: ${port}, in ${process.env.NODE_ENV} MODE.`
  );
});

import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { multerSaveFilesOrg } from "multer-savefilesorg";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const localUpload = multer({ dest: "uploads" });

export const remoteUpload = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "AdWebApp/Products",
    },
  }),
});

export const productImageUpload = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "AdWebApp/Products",
    },
  }),
});

export const productPicturesUpload = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "AdWebApp/Products",
    },
  }),
});

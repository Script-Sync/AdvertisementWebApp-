import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";



export const localUpload = multer({ dest: 'uploads' });

export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/AdvertisementWebApp-/*'
    })
});


export const productImageUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/AdvertisementWebApp-/product-images/*'
    })
});

export const productPicturesUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/AdvertisementWebApp-/product-pictures/*'
    })
});

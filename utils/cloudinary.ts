import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "duewdl1ua",
  api_key: "688996918939936",
  api_secret: "slZEq0ymOl_Y5-eeU6N_uWly41U", // Click 'View Credentials' below to copy your API secret
});

export default cloudinary;

// import { v2 as cloudinary } from "cloudinary";

// (async function () {
//   // Configuration
//   cloudinary.config({
//     cloud_name: "duewdl1ua",
//     api_key: "688996918939936",
//     api_secret: "<your_api_secret>", // Click 'View Credentials' below to copy your API secret
//   });

//   // Upload an image
//   const uploadResult = await cloudinary.uploader
//     .upload(
//       "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//       {
//         public_id: "shoes",
//       }
//     )
//     .catch((error) => {
//       console.log(error);
//     });

//   console.log(uploadResult);

//   // Optimize delivery by resizing and applying auto-format and auto-quality
//   const optimizeUrl = cloudinary.url("shoes", {
//     fetch_format: "auto",
//     quality: "auto",
//   });

//   console.log(optimizeUrl);

//   // Transform the image: auto-crop to square aspect_ratio
//   const autoCropUrl = cloudinary.url("shoes", {
//     crop: "auto",
//     gravity: "auto",
//     width: 500,
//     height: 500,
//   });

//   console.log(autoCropUrl);
// })();

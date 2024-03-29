import axios from "axios";

export const uploadImagesApiRequest = async (images, productId) => {
    const formData = new FormData();
    Array.from(images).forEach(image => {
        formData.append("images", image);
    })
    const {data} = await axios.post("/api/products/admin/upload?productId=" + productId, formData);
    return data
}

export const uploadImagesCloudinaryApiRequest = (images, productId) => {
    // settings in cloudinary
    const url = "https://api.cloudinary.com/v1_1/dzi4cdtxx/image/upload";
    const formData = new FormData();
    for (let i = 0; i < images.length; i++){
        let file = images[i];
        formData.append("file", file);
        // upload settings in cloudinary
        formData.append("upload_preset", "uubaw3j7");
        fetch(url, {
            method: "POST",
            body: formData,
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            // make an api post request to the database using the successful url from cloudinary
            axios.post("/api/products/admin/upload?cloudinary=true&productId=" + productId, data);
        })
    }
}


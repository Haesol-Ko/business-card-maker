const url = "https://api.cloudinary.com/v1_1/delaq5abq/image/upload";

class ImageUploader {
    async upload(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "sl5zqxjm");

        const result = await fetch(url, {
            method: "POST",
            body: formData
        });

        return await result.json();
    }
}

export default ImageUploader;
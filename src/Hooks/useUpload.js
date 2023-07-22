import axios from "axios";

export const useUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const postImgUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST}`;
    
    try {
        return new Promise((resolve, reject) => {
            axios.post(postImgUrl, formData)
                .then(res => {
                    const imageUrl = res.data.data.display_url;
                    resolve(imageUrl);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}
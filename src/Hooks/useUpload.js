import axios from "axios";

export const useUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
        return new Promise((resolve, reject) => {
            fetch(`https://api.imgbb.com/1/upload?key=e6cf4b51cb80f7f70048d35151419f81`, {
                method: "POST",
                body: formData,
            }).then(res => res.json()).then (data => resolve(data.data.display_url))

        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}
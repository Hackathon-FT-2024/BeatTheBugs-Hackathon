
import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function ImageEdit() {

    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const image = URL.createObjectURL(file);
            setImageUrl(image);
        }
    };
    const handleSubmit = () => {
        //    make POST request to api
        alert('Image ajoutée');
    };

    return (
        <div className="container mx-auto">
            <label htmlFor="picture">Image</label>
            <div className="grid grid-cols-2 w-full max-w-sm items-center gap-1">

                {imageUrl && (
                    <div>
                        <img src={imageUrl} alt="Selected" style={{ maxWidth: "175px" }} />
                    </div>
                )}
                <div>
                    <input
                        id="picture"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <Button onClick={handleSubmit} className="w-20 mt-4">Ajouter</Button>
                </div>
            </div>
        </div>
    )
}

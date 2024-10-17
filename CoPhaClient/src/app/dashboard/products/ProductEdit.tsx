import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function ProductEdit() {

    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const image = URL.createObjectURL(file);
            setImageUrl(image);
        }
    };
    const handleSubmit = (e: any) => {
        //    make POST request to api
    };

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="picture">Image</label>
            <input
                id="picture"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
            {imageUrl && (
                <div>
                    <img src={imageUrl} alt="Selected" style={{ maxWidth: "100%" }} />
                </div>
            )}

            <Button type="submit" onSubmit={handleSubmit} className="w-20">Modifier</Button>
        </div>
    )
}

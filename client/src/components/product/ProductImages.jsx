import ProductStore from "../../store/ProductStore.js";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
const ProductImages = () => {
    const {Details}=ProductStore();
    let images=[
        {original: Details['details'].images[0], thumbnail: Details['details'].images[0]},
        {original: Details['details'].images[1], thumbnail: Details['details'].images[1]},
        {original: Details['details'].images[2], thumbnail: Details['details'].images[2]},
        {original: Details['details'].images[3], thumbnail: Details['details'].images[3]},
        {original: Details['details'].images[4], thumbnail: Details['details'].images[4]},
        {original: Details['details'].images[5], thumbnail: Details['details'].images[5]},
        {original: Details['details'].images[6], thumbnail: Details['details'].images[6]},
        {original: Details['details'].images[7], thumbnail: Details['details'].images[7]},
    ]

    return (
        <div>
                <ImageGallery autoPlay={true} items={images}/>
        </div>
    );
};
export default ProductImages;
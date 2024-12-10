import { useParams } from "react-router-dom";

function Product() {
    const parms = useParams();
    return (
        <>
        <h1>Product Detail</h1>
        <p>{parms.productId}</p>

        </>
    )
}
export default Product;
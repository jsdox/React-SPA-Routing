import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' }
    { id: 'p4', title: 'Product 4' }
{ id: 'p5', title: 'Product 5' }
];

function Products() {
    return (
        <>
            <h1>My Products Page</h1>
            <ul>
                {
                    PRODUCTS.map((prod) => (
                            <li key={prod.id}>
                                <Link to={`${prod.id}`}>{prod.title}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    )

}
export default Products;

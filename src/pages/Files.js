import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: 'p1', title: 'File 1' },
    { id: 'p2', title: 'File 2' },
    { id: 'p3', title: 'File 3' }
];

function Files() {
    return (
        <>
            <h1>My File Page</h1>
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
export default Files;

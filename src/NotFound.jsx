import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Requested Page can not be found</p>
            <Link to='/'>Bake to HomePage</Link>
        </div>
     );
}
 
export default NotFound;
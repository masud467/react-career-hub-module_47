import { NavLink } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h1>Oops !!!</h1>
            <NavLink to='/'>Go Back to home</NavLink>
        </div>
    );
};

export default Errorpage;
import {Routes, Route, Link, Navigate} from 'react-router-dom';

const Navbar = ()=> {



    return(

        <>

        <nav id="thetop" className="navbar">  


                <ul>

                    <li><Link to={'/'}>My Crud App</Link></li>
                    <li><Link to={'/signup'}>Signup</Link></li>

                   


                </ul>

                


        </nav>
        

        </>


    )


};

export default Navbar
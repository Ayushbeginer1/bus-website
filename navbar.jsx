import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="rounded-lg block p-0 mr-3 ml-1 sticky mt-3 border-b-2 border-black">
                <ul className="list-none flex gap-10 justify-center m-2 p-3 text-black-900 relative top-1 right-3">
                    <img src="/src/component/simple bus logo for bus tracking website.png" alt="logo" className="h-20 outline outline-red-500 relative right-80 rounded-full shadow-lg shadow-black bottom-2" />

                    <li>
                        <Link to="/">
                            <button className="hover:bg-gray-800 hover:text-white rounded transition ease-out 20ms hover:transform hover:scale-110 hover:p-2 hover:transition hover:-translate-y-2 m-2 border-b-2 border-black">Home</button>
                        </Link>
                    </li>

                    <li>
                        <button className="hover:bg-gray-800 hover:text-white rounded transition ease-out 20ms hover:transform hover:scale-110 hover:p-2 hover:-translate-y-2 m-2 border-b-2 border-black">About</button>
                    </li>

                    <li>
                        <Link to="/services">
                            <button className="hover:bg-gray-800 hover:text-white rounded transition ease-out duration-200 hover:transform hover:scale-110 hover:p-2 hover:-translate-y-2 m-2 border-b-2 border-black">Services</button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/map">
                            <button className="hover:bg-gray-800 hover:text-white rounded transition ease-out 20ms hover:transform hover:scale-110 hover:p-2 hover:-translate-y-2 m-2 border-b-2 border-black">Track Buses</button>
                        </Link>
                    </li>

                    <li>
                        <button className="hover:bg-gray-800 hover:text-white rounded transition ease-out 20ms hover:transform hover:scale-110 hover:p-2 hover:-translate-y-2 m-2 border-b-2 border-black">Send Alerts</button>
                    </li>
                </ul>
            </div>
            <ul className="list-none flex gap-8 justify-end">
                <li className="relative bottom-24 right-5">
                    <button className="hover:bg-gray-800 hover:text-white rounded transition ease-out 10ms hover:transform hover:scale-110 hover:p-1 hover:-translate-y-2">SignUp</button>
                </li>
                <li className="relative bottom-24 right-8">
                    <button className="hover:bg-gray-800 hover:text-white rounded transition ease-out 10ms hover:transform hover:scale-110 hover:p-1 hover:-translate-y-2">LogIn</button>
                </li>
            </ul>
        </>
    );
}
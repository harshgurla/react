import { Outlet } from "react-router";


const SideBar = () => {
    return (
        <div>
        <div>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/dashboard/products"></Link></li>
                <li><Link to="dashboard/cart"></Link></li>
            </ul>
        </div>
        <main>
            <Outlet />
        </main>
        </div>
    )
}

export default SideBar;
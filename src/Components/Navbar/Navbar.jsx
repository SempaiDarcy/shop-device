import './Navbar.css';

export const Navbar = ({ isNavbarOpen }) => {
    return (
        isNavbarOpen ? (
            <div className="navbar">
                <div>Phones</div>
                <div>Notebooks</div>
                <div>Monitors</div>
            </div>
        ) : null
    );
};
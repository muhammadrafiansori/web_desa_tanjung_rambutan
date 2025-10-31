import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between">
                <Link to="/" className="text-desa-green-600 font-bold">Home</Link>
                {/* Add link to Organizational Structure */}
                <Link to="/struktur-organisasi" className="text-desa-green-600">Struktur Organisasi</Link>
            </div>
        </nav>
    );
};

export default Navbar;

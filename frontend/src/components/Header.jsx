import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, FaBars, FaTimes, FaChevronDown } from './Icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-village-primary to-village-secondary text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    {/* Logo dan Nama Desa */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 flex-shrink-0">
                            <img
                                src="/logo/Lambang_Kabupaten_Kampar.png"
                                alt="Logo Kabupaten Kampar"
                                className="w-full h-full object-contain drop-shadow-sm"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-12 h-12 bg-white rounded-full hidden items-center justify-center flex-shrink-0">
                                <svg className="w-8 h-8 text-village-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg md:text-xl font-bold text-white leading-tight">
                                Desa Tanjung Rambutan
                            </h1>
                            <p className="text-xs md:text-sm opacity-90 text-green-100">
                                Kecamatan Kampar, Kabupaten Kampar
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex">
                        <ul className="flex items-center space-x-1">
                            <li>
                                <Link
                                    to="/"
                                    className="text-white hover:text-green-100 hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li className="relative group">
                                <button className="text-white hover:text-green-100 hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm flex items-center">
                                    Profil Desa
                                    <Icon icon={FaChevronDown} size="sm" className="ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="/about" className="block px-4 py-3 text-desa-green-600 hover:bg-desa-green-50 hover:text-desa-green-700 rounded-t-lg text-sm font-medium transition-colors">Tentang Desa</Link></li>
                                    <li><Link to="/profil/sejarah" className="block px-4 py-3 text-desa-green-600 hover:bg-desa-green-50 hover:text-desa-green-700 text-sm font-medium transition-colors">Sejarah</Link></li>
                                    <li><Link to="/profil/geografis" className="block px-4 py-3 text-desa-green-600 hover:bg-desa-green-50 hover:text-desa-green-700 text-sm font-medium transition-colors">Geografis</Link></li>
                                    <li><Link to="/data-populasi" className="block px-4 py-3 text-desa-green-600 hover:bg-desa-green-50 hover:text-desa-green-700 rounded-b-lg text-sm font-medium transition-colors">Data Populasi</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                    to="/pemerintahan/struktur"
                                    className="text-white hover:text-green-100 hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm"
                                >
                                    Struktur Organisasi
                                </Link>
                            </li>
                            <li><Link to="/berita" className="text-white hover:text-green-100 hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm">Berita</Link></li>
                            <li><Link to="/profil-desa" className="text-white hover:text-green-100 hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm">Buku Profil Desa</Link></li>
                            <li><Link to="/galeri" className="text-white hover:text-green-100 hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm">Galeri</Link></li>
                            <li><Link to="/kontak" className="text-white hover:text-green-100 hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm">Kontak</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
                    <nav className="glass rounded-lg mx-4 mt-2">
                        <ul className="p-2 space-y-1">
                            <li><Link to="/" className="block py-3 px-4 text-white hover:bg-white/20 rounded-md transition-colors text-sm font-medium" onClick={toggleMenu}>Beranda</Link></li>
                            <li><Link to="/about" className="block py-3 px-4 text-white hover:bg-white/20 rounded-md transition-colors text-sm font-medium" onClick={toggleMenu}>Profil Desa</Link></li>
                            <li><Link to="/pemerintahan/struktur" className="block py-3 px-4 text-white hover:bg-white/20 rounded-md transition-colors text-sm font-medium" onClick={toggleMenu}>Struktur Organisasi</Link></li>
                            <li><Link to="/berita" className="block py-3 px-4 text-white hover:bg-white/20 rounded-md transition-colors text-sm font-medium" onClick={toggleMenu}>Berita</Link></li>
                            <li><Link to="/profil-desa" className="block py-3 px-4 text-white hover:bg-white/20 rounded-md transition-colors text-sm font-medium" onClick={toggleMenu}>Buku Profil Desa</Link></li>
                            <li><Link to="/galeri" className="block py-3 px-4 text-white hover:bg-white/20 rounded-md transition-colors text-sm font-medium" onClick={toggleMenu}>Galeri</Link></li>
                            <li><Link to="/kontak" className="block py-3 px-4 text-white hover:bg-white/20 rounded-md transition-colors text-sm font-medium" onClick={toggleMenu}>Kontak</Link></li>
                            <li><Link to="/data-populasi" className="block py-3 px-4 text-white hover:bg-white/20 rounded-md transition-colors text-sm font-medium" onClick={toggleMenu}>Data Populasi</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
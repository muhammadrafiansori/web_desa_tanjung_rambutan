import React from 'react';
import { Icon, FaMapMarkerAlt, FaPhone, FaEnvelope } from './Icons';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-desa-green-700 to-desa-green-600 text-white mt-auto">
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                    {/* Info Kontak */}
                    <div>
                        <h3 className="text-desa-green-100 text-lg font-semibold mb-4">Kontak Kami</h3>
                        <div className="space-y-3">
                            <p className="flex items-center text-desa-green-50">
                                <Icon icon={FaMapMarkerAlt} size="md" className="mr-3 text-desa-green-100" />
                                Jl. Raya Desa Tanjung Rambutan
                            </p>
                            <p className="flex items-center text-desa-green-50">
                                <Icon icon={FaPhone} size="md" className="mr-3 text-desa-green-100" />
                                (0761) 123456
                            </p>
                            <p className="flex items-center text-desa-green-50">
                                <Icon icon={FaEnvelope} size="md" className="mr-3 text-desa-green-100" />
                                admin@tanjungrambutan-desa.id
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-desa-green-100 text-lg font-semibold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/profil" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Profil Desa
                                </a>
                            </li>
                            <li>
                                <a href="/pemerintahan" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Pemerintahan
                                </a>
                            </li>
                            <li>
                                <a href="/layanan" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Layanan
                                </a>
                            </li>
                            <li>
                                <a href="/berita" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Berita
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h3 className="text-desa-green-100 text-lg font-semibold mb-4">Layanan Desa</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/layanan/ktp" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Kartu Tanda Penduduk
                                </a>
                            </li>
                            <li>
                                <a href="/layanan/kk" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Kartu Keluarga
                                </a>
                            </li>
                            <li>
                                <a href="/layanan/surat-keterangan" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Surat Keterangan
                                </a>
                            </li>
                            <li>
                                <a href="/layanan/pengaduan" className="text-desa-green-50 hover:text-desa-green-100 hover:pl-2 transition-all duration-300 block py-1">
                                    Pengaduan Online
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Stats */}
                    <div>
                        <h3 className="text-desa-green-100 text-lg font-semibold mb-4">Media Sosial</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <a href="#" className="bg-white/10 hover:bg-blue-600 px-3 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:-translate-y-1">
                                Facebook
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-pink-500 px-3 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:-translate-y-1">
                                Instagram
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-green-500 px-3 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:-translate-y-1">
                                WhatsApp
                            </a>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <h4 className="text-desa-green-100 text-sm font-semibold mb-3">Statistik Pengunjung</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-desa-green-50">Hari ini:</span>
                                    <span className="text-desa-green-100 font-semibold">127</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-desa-green-50">Bulan ini:</span>
                                    <span className="text-desa-green-100 font-semibold">3.450</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-desa-green-50">Total:</span>
                                    <span className="text-desa-green-100 font-semibold">45.678</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-desa-green-100 text-sm">
                            &copy; 2024 Desa Tanjung Rambutan. Semua hak cipta dilindungi.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
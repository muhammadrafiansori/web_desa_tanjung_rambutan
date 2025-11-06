import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-desa-green-800 text-white mt-auto">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                    {/* Info Kontak */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6">Kontak Kami</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-4 h-4 mt-1 mr-3 text-desa-green-200">📍</div>
                                <p className="text-gray-200 leading-relaxed">
                                    Jln Kemuning Desa Tanjung Rambutan<br />
                                    Kecamatan Kampar Kiri<br />
                                    Kabupaten Kampar, Provinsi Riau<br />
                                    Kode Pos 28461
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 mr-3 text-desa-green-200">📞</div>
                                    <div className="text-gray-200">
                                        <a href="tel:+6285267556489" className="hover:text-white transition-colors">
                                            085267556489 <span className="text-xs text-gray-400">(Kepala Desa)</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center ml-7">
                                    <div className="text-gray-200">
                                        <a href="tel:+6285355740112" className="hover:text-white transition-colors">
                                            085355740112 <span className="text-xs text-gray-400">(Sekretaris)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 mr-3 text-desa-green-200">✉️</div>
                                <p className="text-gray-200">admin@tanjungrambutan-desa.id</p>
                            </div>
                        </div>
                    </div>

                    {/* Media Sosial & Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6">Ikuti Kami</h3>
                        
                        {/* Social Media */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <a href="#" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors duration-300 flex items-center">
                                📘 Facebook
                            </a>
                            <a href="#" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors duration-300 flex items-center">
                                📷 Instagram
                            </a>
                            <a href="https://wa.me/6285267556489" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors duration-300 flex items-center">
                                📱 WA Kepala Desa
                            </a>
                            <a href="https://wa.me/6285355740112" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors duration-300 flex items-center">
                                📱 WA Sekretaris
                            </a>
                        </div>

                        {/* Statistik Simple */}
                        <div className="bg-desa-green-700 p-5 rounded-lg">
                            <h4 className="text-white font-semibold mb-4">Pengunjung Website</h4>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-white text-lg font-bold">127</div>
                                    <div className="text-gray-300 text-xs">Hari Ini</div>
                                </div>
                                <div>
                                    <div className="text-white text-lg font-bold">3.5K</div>
                                    <div className="text-gray-300 text-xs">Bulan Ini</div>
                                </div>
                                <div>
                                    <div className="text-white text-lg font-bold">45K</div>
                                    <div className="text-gray-300 text-xs">Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-desa-green-700 py-4 text-center">
                    <p className="text-gray-300 text-sm">
                        © 2024 Desa Tanjung Rambutan - Semua hak cipta dilindungi undang-undang
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
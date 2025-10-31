import React, { useState, useEffect } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const populationStats = {
        total: 2483,
        households: 696,
        male: 1251,
        female: 1232
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
            {/* Hero Section with Pattern */}
            <div className={`relative bg-gradient-to-r from-desa-green-600 to-desa-green-800 text-white py-24 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="text-center">
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg transition-all duration-1000 delay-300 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            Tentang Desa Tanjung Rambutan
                        </h1>
                        <p className={`text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            Mengenal lebih dekat sejarah, visi misi, dan profil lengkap Desa Tanjung Rambutan
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Sejarah Section with Card Design */}
                <div className={`bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-[1.02] transition-all duration-1000 delay-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="flex items-center mb-8">
                        <span className="w-12 h-12 bg-desa-green-100 rounded-full flex items-center justify-center mr-4">
                            📚
                        </span>
                        <h2 className="text-3xl font-bold text-desa-green-600">
                            Sejarah Desa
                        </h2>
                    </div>
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            Desa Tanjung Rambutan merupakan salah satu desa yang terletak di Kecamatan Kampar. Desa ini berdiri pada tahun 2000 sebagai hasil pemekaran dari tiga desa, yaitu Desa Batu Belah, Desa Tanjung Rambutan, dan Desa Simpang Kubu.
                        </p>
                        <p>
                            Dahulu daerah ini dikenal dengan nama "Tanjuang Rebutan". Pada masa itu, wilayah ini masih berupa daerah persinggahan yang ramai dilalui oleh masyarakat yang menggunakan jalur transportasi air, sebab sungai menjadi jalur utama perjalanan dan perdagangan.
                        </p>
                        <p>
                            Ketika daerah ini mulai mengering dan dapat dihuni, banyak orang datang dan berebut untuk menempati serta menguasai wilayah tersebut, sehingga muncullah nama "Tanjuang Rebutan." Namun, seiring berjalannya waktu, pelafalan nama tersebut berubah menjadi "Tanjung Rambutan".
                        </p>
                    </div>
                </div>

                {/* Photo Gallery Section */}
                <div className={`mb-16 transition-all duration-1000 delay-900 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-3xl font-bold text-center text-desa-green-600 mb-8">
                        Galeri Desa
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Photo Card 1 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg h-64">
                            <img
                                src="/fotodesa/Galeri6.png"
                                alt="Pemandangan Desa"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.src = '/images/placeholder.jpg';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-white font-semibold">Pemandangan Desa</h3>
                                    <p className="text-gray-200 text-sm">Keindahan alam Desa Tanjung Rambutan</p>
                                </div>
                            </div>
                        </div>

                        {/* Photo Card 2 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg h-64">
                            <img
                                src="/fotodesa/Galeri8.png"
                                alt="Balai Desa"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.src = '/images/placeholder.jpg';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-white font-semibold">Balai Desa</h3>
                                    <p className="text-gray-200 text-sm">Pusat pelayanan masyarakat</p>
                                </div>
                            </div>
                        </div>

                        {/* Photo Card 3 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg h-64">
                            <img
                                src="/fotodesa/Galeri2.png"
                                alt="Kegiatan Masyarakat"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.src = '/images/placeholder.jpg';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-white font-semibold">Kegiatan Masyarakat</h3>
                                    <p className="text-gray-200 text-sm">Gotong royong pembangunan desa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visi & Misi with Glass Effect */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-1100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-green-100 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <span className="w-12 h-12 bg-desa-green-100 rounded-full flex items-center justify-center mr-4">
                                🎯
                            </span>
                            <h3 className="text-2xl font-bold text-desa-green-600">Visi</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Kebersamaan dalam membangun demi terciptanya Desa Tanjung Rambutan yang maju dan sejahtera.
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-green-100 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <span className="w-12 h-12 bg-desa-green-100 rounded-full flex items-center justify-center mr-4">
                                🚀
                            </span>
                            <h3 className="text-2xl font-bold text-desa-green-600">Misi</h3>
                        </div>
                        <ul className="space-y-4 text-gray-600">
                            <li>1. Bersama masyarakat memperkuat kelembagaan Desa yang ada.</li>
                            <li>2. Bersama masyarakat dan kelembagaan desa menyelenggarakan pemerintahan dan melaksanakan pembangunan yang partisipatif.</li>
                            <li>3. Bersama masyarakat dan kelembagaan desa dalam mewujudkan Desa Tanjung Rambutan yang makmur, sejahtera dan mandiri.</li>
                            <li>4. Bersama masyarakat dan kelembagaan desa memberdayakan masyarakat untuk meningkatkan kesejahteraan masyarakat.</li>
                        </ul>
                    </div>
                </div>

                {/* Data Demografis with Modern Stats Cards */}
                <div className={`mb-16 transition-all duration-1000 delay-1300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-3xl font-bold text-center text-desa-green-600 mb-12">
                        Data Demografis
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className={`bg-white rounded-2xl shadow-lg p-6 border-t-4 border-desa-green-500 hover:shadow-xl transition-all duration-1000 delay-1400 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="text-4xl font-bold text-desa-green-600 mb-2">{populationStats.total}</div>
                            <div className="text-gray-500 font-medium">Total Penduduk</div>
                        </div>
                        <div className={`bg-white rounded-2xl shadow-lg p-6 border-t-4 border-desa-green-500 hover:shadow-xl transition-all duration-1000 delay-1500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="text-4xl font-bold text-desa-green-600 mb-2">{populationStats.households}</div>
                            <div className="text-gray-500 font-medium">Kepala Keluarga</div>
                        </div>
                        <div className={`bg-white rounded-2xl shadow-lg p-6 border-t-4 border-desa-green-500 hover:shadow-xl transition-all duration-1000 delay-1600 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="text-4xl font-bold text-desa-green-600 mb-2">{populationStats.male}</div>
                            <div className="text-gray-500 font-medium">Laki-laki</div>
                        </div>
                        <div className={`bg-white rounded-2xl shadow-lg p-6 border-t-4 border-desa-green-500 hover:shadow-xl transition-all duration-1000 delay-1700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="text-4xl font-bold text-desa-green-600 mb-2">{populationStats.female}</div>
                            <div className="text-gray-500 font-medium">Perempuan</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
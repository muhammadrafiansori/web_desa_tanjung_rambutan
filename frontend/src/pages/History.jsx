import React, { useState, useEffect } from 'react';

const History = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const leadershipHistory = [
        {
            period: "2001– 2003",
            note: "Desa Persiapan",
            leader: "H. M. SYAMRO",
            secretary: "HASYADI"
        },
        {
            period: "2003– 2014",
            leader: "YUSJAR",
            secretary: "HASYADI"
        },
        {
            period: "2014– 2015",
            leader: "Camat Kampar",
            secretary: "HASYADI"
        },
        {
            period: "2015– 2022",
            leader: "DEDI WAHYUDI,SE",
            secretary: ["HASYADI (2015-2017)", "ANDI SAPUTRA (2017-2022)"]
        },
        {
            period: "2023 – Agustus 2023",
            leader: "YUSJAR",
            secretary: "RUSFANDI SAHAR"
        },
        {
            period: "2023 – Sekarang",
            leader: "DEDI WAHYUDI, SE.MM",
            secretary: "FITRI HIDAYATI"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
            {/* Hero Section with parallax effect */}
            <div className={`relative bg-desa-green-600 text-white py-32 overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 drop-shadow-lg transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        Sejarah Desa Tanjung Rambutan
                    </h1>
                    <p className={`text-xl md:text-2xl text-center text-green-100 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        Mengenal lebih dalam tentang asal-usul dan perkembangan desa kita
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* History Section with decorative elements */}
                <div className={`bg-white rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden transition-all duration-1000 delay-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -mr-32 -mt-32 opacity-20"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-desa-green-600 mb-8 flex items-center">
                            <span className="w-12 h-12 rounded-full bg-desa-green-100 flex items-center justify-center mr-4">
                                📖
                            </span>
                            Asal Usul Nama
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                            <p className="mb-4">Desa Tanjung Rambutan merupakan salah satu desa yang terletak di Kecamatan Kampar. Desa ini berdiri pada tahun 2000 sebagai hasil pemekaran dari tiga desa, yaitu Desa Batu Belah, Desa Tanjung Rambutan, dan Desa Simpang Kubu.</p>
                            <p className="mb-4">Dahulu daerah ini dikenal dengan nama "Tanjuang Rebutan", bukan "Tanjung Rambutan" seperti sekarang. Pada masa itu, wilayah ini masih berupa daerah persinggahan yang ramai dilalui oleh masyarakat yang menggunakan jalur transportasi air, sebab sungai menjadi jalur utama perjalanan dan perdagangan.</p>
                            <p className="mb-4">Ketika daerah ini mulai mengering dan dapat dihuni, banyak orang datang dan berebut untuk menempati serta menguasai wilayah tersebut, sehingga muncullah nama "Tanjuang Rebutan." Namun, seiring berjalannya waktu, pelafalan nama "Tanjuang Rebutan" berubah menjadi "Tanjung Rambutan".</p>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission with glass morphism effect */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 delay-900 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                        <h2 className="text-2xl font-bold text-desa-green-600 mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-desa-green-100 flex items-center justify-center mr-3">
                                🎯
                            </span>
                            Visi
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Kebersamaan dalam membangun demi terciptanya Desa Tanjung Rambutan yang maju dan sejahtera.
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                        <h2 className="text-2xl font-bold text-desa-green-600 mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-desa-green-100 flex items-center justify-center mr-3">
                                🚀
                            </span>
                            Misi
                        </h2>
                        <ul className="list-none space-y-4">
                            <li className="flex items-start">
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Bersama masyarakat memperkuat kelembagaan Desa yang ada.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Bersama masyarakat dan kelembagaan desa menyelenggarakan pemerintahan dan melaksanakan pembangunan yang partisipatif.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Bersama masyarakat dan kelembagaan desa dalam mewujudkan Desa Tanjung Rambutan yang makmur, sejahtera dan mandiri.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Bersama masyarakat dan kelembagaan desa memberdayakan masyarakat untuk meningkatkan kesejahteraan masyarakat.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Leadership Timeline */}
                <div className={`bg-white rounded-2xl shadow-xl p-8 mb-12 transition-all duration-1000 delay-1100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-3xl font-bold text-desa-green-600 mb-8 flex items-center">
                        <span className="w-12 h-12 rounded-full bg-desa-green-100 flex items-center justify-center mr-4">
                            👥
                        </span>
                        Sejarah Kepemimpinan
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-desa-green-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-desa-green-600 uppercase tracking-wider">Periode</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-desa-green-600 uppercase tracking-wider">Kepala Desa</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-desa-green-600 uppercase tracking-wider">Sekretaris Desa</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {leadershipHistory.map((period, index) => (
                                    <tr key={index} className={`hover:bg-gray-50 transition-all duration-1000 ${
                                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                    }`} style={{transitionDelay: `${1200 + index * 150}ms`}}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {period.period}
                                            {period.note && <div className="text-xs text-gray-500">{period.note}</div>}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{period.leader}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {Array.isArray(period.secretary) 
                                                ? period.secretary.map((sec, idx) => (
                                                    <div key={idx}>{sec}</div>
                                                ))
                                                : period.secretary
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Geographic Information with cards */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-1500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300">
                        <h2 className="text-2xl font-bold text-desa-green-600 mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-desa-green-100 flex items-center justify-center mr-3">
                                🗺️
                            </span>
                            Batas Wilayah
                        </h2>
                        <ul className="space-y-4">
                            <li className={`flex items-start transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`} style={{transitionDelay: '1600ms'}}>
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Sebelah Utara berbatasan dengan Desa Muara Jalai</span>
                            </li>
                            <li className={`flex items-start transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`} style={{transitionDelay: '1700ms'}}>
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Sebelah Selatan berbatasan dengan Desa Siabu</span>
                            </li>
                            <li className={`flex items-start transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`} style={{transitionDelay: '1800ms'}}>
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Sebelah Barat berbatasan dengan Desa Batu Belah</span>
                            </li>
                            <li className={`flex items-start transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`} style={{transitionDelay: '1900ms'}}>
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Sebelah Timur berbatasan dengan Desa Simpang Kubu</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300">
                        <h2 className="text-2xl font-bold text-desa-green-600 mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-desa-green-100 flex items-center justify-center mr-3">
                                📍
                            </span>
                            Pembagian Wilayah
                        </h2>
                        <ul className="space-y-4">
                            <li className={`flex items-start transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`} style={{transitionDelay: '1600ms'}}>
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Dusun I - Kepala Dusun Ikwanul Khaidir, S.Pd (2 RW dan 4 RT)</span>
                            </li>
                            <li className={`flex items-start transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`} style={{transitionDelay: '1700ms'}}>
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Dusun II - Kepala Dusun Suarli Andri Pranata (2 RW dan 4 RT)</span>
                            </li>
                            <li className={`flex items-start transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`} style={{transitionDelay: '1800ms'}}>
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Dusun III - Kepala Dusun Hadi Purnomo, SE (2 RW dan 4 RT)</span>
                            </li>
                            <li className={`flex items-start transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`} style={{transitionDelay: '1900ms'}}>
                                <span className="text-desa-green-600 mr-2">▪</span>
                                <span>Dusun IV - Kepala Dusun Farhan Furqan (2 RW dan 4 RT)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;

import React, { useState, useEffect } from 'react';

const PopulationData = () => {
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
        female: 1232,
        date: "8 Mei 2025"
    };

    const occupations = [
        { name: "Petani", count: 673 },
        { name: "Buruh tani/buruh nelayan", count: 73 },
        { name: "PNS", count: 83 },
        { name: "Pegawai swasta", count: 225 },
        { name: "Wiraswasta/pedagang", count: 285 },
        { name: "TNI", count: 2 },
        { name: "Polri", count: 4 },
        { name: "Bidan", count: 17 },
        { name: "Perawat (swasta/honorer)", count: 22 }
    ];

    const educationFacilities = [
        { name: "TK/PAUD/sederajat", count: 2, location: "Dusun II, IV" },
        { name: "SD/MI/sederajat", count: 2, location: "Dusun II, IV" },
        { name: "SLTP/MTs/sederajat", count: 0, location: "-" },
        { name: "SLTA/MA/sederajat", count: 1, location: "Dusun III" },
        { name: "PDTA", count: 2, location: "Dusun II, IV" }
    ];

    const infrastructure = [
        { name: "Masjid", count: 4, location: "Dusun I, II, III, IV" },
        { name: "Surau/mushalla", count: 7, location: "Dusun I, II, III, IV" },
        { name: "BUMDes", count: 1, location: "Dusun III" },
        { name: "Kesehatan (Pustu/POSKESDES/POLINDES/POSYANDU)", count: 1, location: "Dusun II" },
        { name: "Perpustakaan desa", count: 0, location: "-" },
        { name: "Lapangan olahraga", count: 3, location: "Dusun II, III" },
        { name: "PAM/PDAM", count: 0, location: "-" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className={`text-3xl font-bold text-center text-gray-900 mb-12 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>Data Populasi dan Fasilitas Desa</h1>

                {/* Population Statistics */}
                <div className={`bg-white rounded-lg shadow-lg p-6 mb-8 transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-2xl font-semibold mb-6 text-desa-green-600">Jumlah Penduduk</h2>
                    <p className="text-gray-600 mb-4">Menurut data pada tanggal {populationStats.date}</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className={`bg-desa-green-50 p-4 rounded-lg text-center transition-all duration-1000 delay-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="text-3xl font-bold text-desa-green-600 mb-2">{populationStats.total}</div>
                            <div className="text-gray-600">Total Jiwa</div>
                        </div>
                        <div className={`bg-desa-green-50 p-4 rounded-lg text-center transition-all duration-1000 delay-600 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="text-3xl font-bold text-desa-green-600 mb-2">{populationStats.households}</div>
                            <div className="text-gray-600">Kepala Keluarga</div>
                        </div>
                        <div className={`bg-desa-green-50 p-4 rounded-lg text-center transition-all duration-1000 delay-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="text-3xl font-bold text-desa-green-600 mb-2">{populationStats.male}</div>
                            <div className="text-gray-600">Laki-laki</div>
                        </div>
                        <div className={`bg-desa-green-50 p-4 rounded-lg text-center transition-all duration-1000 delay-800 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="text-3xl font-bold text-desa-green-600 mb-2">{populationStats.female}</div>
                            <div className="text-gray-600">Perempuan</div>
                        </div>
                    </div>
                </div>

                {/* Occupations */}
                <div className={`bg-white rounded-lg shadow-lg p-6 mb-8 transition-all duration-1000 delay-900 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-2xl font-semibold mb-6 text-desa-green-600">Jumlah Penduduk Berdasarkan Pekerjaan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {occupations.map((job, index) => (
                            <div key={index} className={`flex justify-between items-center border-b py-2 transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`} style={{transitionDelay: `${1000 + index * 100}ms`}}>
                                <span className="text-gray-700">{job.name}</span>
                                <span className="font-semibold text-desa-green-600">{job.count} orang</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Facilities */}
                <div className={`bg-white rounded-lg shadow-lg p-6 mb-8 transition-all duration-1000 delay-1200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-2xl font-semibold mb-6 text-desa-green-600">Lembaga Pendidikan</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-desa-green-50">
                                    <th className="px-4 py-2 text-left">Jenis</th>
                                    <th className="px-4 py-2 text-center">Jumlah</th>
                                    <th className="px-4 py-2 text-left">Lokasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {educationFacilities.map((facility, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-4 py-2 text-gray-700">{facility.name}</td>
                                        <td className="px-4 py-2 text-center font-semibold text-desa-green-600">{facility.count} buah</td>
                                        <td className="px-4 py-2 text-gray-700">{facility.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Infrastructure */}
                <div className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-1000 delay-1400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-2xl font-semibold mb-6 text-desa-green-600">Sarana dan Prasarana</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-desa-green-50">
                                    <th className="px-4 py-2 text-left">Jenis</th>
                                    <th className="px-4 py-2 text-center">Jumlah</th>
                                    <th className="px-4 py-2 text-left">Lokasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {infrastructure.map((item, index) => (
                                    <tr key={index} className={`border-b transition-all duration-1000 ${
                                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                                    }`} style={{transitionDelay: `${1500 + index * 100}ms`}}>
                                        <td className="px-4 py-2 text-gray-700">{item.name}</td>
                                        <td className="px-4 py-2 text-center font-semibold text-desa-green-600">{item.count} buah</td>
                                        <td className="px-4 py-2 text-gray-700">{item.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopulationData;

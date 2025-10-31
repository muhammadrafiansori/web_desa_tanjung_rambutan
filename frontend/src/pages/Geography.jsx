import React, { useState, useEffect } from 'react';

const Geography = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        // Initial page load animation
        setTimeout(() => setIsLoaded(true), 100);
        
        // Staggered section animations
        const sections = ['header', 'location', 'boundaries', 'infrastructure'];
        sections.forEach((section, index) => {
            setTimeout(() => {
                setVisibleSections(prev => ({ ...prev, [section]: true }));
            }, 200 + (index * 150));
        });

        // Map animation (last)
        setTimeout(() => setMapLoaded(true), 200 + (sections.length * 150) + 300);
    }, []);
    const geographicData = {
        location: {
            area: "11.025,00 Ha"
        },
        boundaries: {
            north: "Desa Muara Jalai",
            south: "Desa Siabu", 
            east: "Desa Simpang Kubu",
            west: "Desa Batu Belah"
        },
        distances: {
            subDistrict: { distance: "4 km", time: "10 Menit" },
            regency: { distance: "6 km", time: "15 Menit" },
            province: { distance: "53 km", time: "1.12 jam" }
        },
        infrastructure: {
            education: {
                tkPaud: { count: "2 buah", location: "Dusun II, IV" },
                sdMi: { count: "2 buah", location: "Dusun II, IV" },
                sltpMts: { count: "-", location: "-" },
                sltaMa: { count: "1 buah", location: "Dusun III" },
                pdta: { count: "2 buah", location: "Dusun II, IV" }
            },
            facilities: {
                masjid: { count: "4 buah", location: "Dusun I, II, III, IV" },
                surauMushalla: { count: "7 buah", location: "Dusun I, II, III, IV" },
                bumdes: { count: "1 buah", location: "Dusun III" },
                health: { count: "1 buah", location: "Dusun II", type: "Pustu/POSKESDES/POLINDES/POSYANDU" },
                library: { count: "-", location: "-" },
                sportsField: { count: "3 buah", location: "Dusun II, III" },
                pamPdam: { count: "-", location: "-" }
            }
        }
    };

    const MapIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );

    const MountainIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l5.5 7.5L16 3l3 4-7 13-7-13z" />
        </svg>
    );

    const CloudIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    );

    const TreeIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m6-14l-6-2-6 2v12l6 2 6-2V7z" />
        </svg>
    );

    return (
        <div className={`min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 py-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
                        Geografis Desa
                    </h1>
                    <p className="text-xl text-gray-600">
                        Desa Tanjung Rambutan, Kecamatan Kampar Kiri, Kabupaten Kampar
                    </p>
                    <div className="mt-4 inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200">
                        <MapIcon />
                        <span className="ml-2 text-gray-700 font-medium">Provinsi Riau, Indonesia</span>
                    </div>
                </div>

                {/* Lokasi & Luas Wilayah */}
                <div className={`bg-white rounded-xl shadow-lg p-6 mb-8 transition-all duration-700 ${visibleSections.location ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <MapIcon />
                        <span className="ml-3">Luas Wilayah</span>
                    </h2>
                    <div className="w-full">
                        <div className="p-8 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-xl border-2 border-green-200 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            <div className="flex items-center justify-between px-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-2xl">🗺️</span>
                                </div>
                                <div className="text-center flex-1 mx-8">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Luas Wilayah</h3>
                                    <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{geographicData.location.area}</p>
                                    <p className="text-gray-600 mt-2 font-medium">Desa Tanjung Rambutan</p>
                                </div>
                                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-2xl">📍</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Jarak Tempuh */}
                <div className={`bg-white rounded-xl shadow-lg p-6 mb-8 transition-all duration-700 delay-300 ${visibleSections.boundaries ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <MapIcon />
                        <span className="ml-3">Jarak Tempuh (Orbitas)</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-lg">🏛️</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Ibukota Kecamatan</h3>
                            <p className="text-2xl font-bold text-blue-600 mb-1">{geographicData.distances.subDistrict.distance}</p>
                            <p className="text-sm text-gray-600">Waktu: {geographicData.distances.subDistrict.time}</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-lg">🏢</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Ibukota Kabupaten</h3>
                            <p className="text-2xl font-bold text-green-600 mb-1">{geographicData.distances.regency.distance}</p>
                            <p className="text-sm text-gray-600">Waktu: {geographicData.distances.regency.time}</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-lg">🌟</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Ibukota Provinsi</h3>
                            <p className="text-2xl font-bold text-purple-600 mb-1">{geographicData.distances.province.distance}</p>
                            <p className="text-sm text-gray-600">Waktu: {geographicData.distances.province.time}</p>
                        </div>
                    </div>
                </div>

                {/* Infrastruktur */}
                <div className={`bg-white rounded-xl shadow-lg p-6 mb-8 transition-all duration-700 delay-400 ${visibleSections.infrastructure ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Infrastruktur Desa</h2>
                    
                    {/* Lembaga Pendidikan */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">🏫</span>
                            Lembaga Pendidikan
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">TK/PAUD</h4>
                                <p className="text-blue-600 font-medium">{geographicData.infrastructure.education.tkPaud.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.tkPaud.location}</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">SD/MI</h4>
                                <p className="text-green-600 font-medium">{geographicData.infrastructure.education.sdMi.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.sdMi.location}</p>
                            </div>
                            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">SLTP/MTs</h4>
                                <p className="text-yellow-600 font-medium">{geographicData.infrastructure.education.sltpMts.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.sltpMts.location}</p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">SLTA/MA</h4>
                                <p className="text-purple-600 font-medium">{geographicData.infrastructure.education.sltaMa.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.sltaMa.location}</p>
                            </div>
                            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">PDTA</h4>
                                <p className="text-indigo-600 font-medium">{geographicData.infrastructure.education.pdta.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.pdta.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sarana dan Prasarana */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm mr-3">🏢</span>
                            Sarana dan Prasarana
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800 flex items-center">
                                    <span className="mr-2">🕌</span>Masjid
                                </h4>
                                <p className="text-emerald-600 font-medium">{geographicData.infrastructure.facilities.masjid.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.masjid.location}</p>
                            </div>
                            <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800 flex items-center">
                                    <span className="mr-2">🕌</span>Surau/Mushalla
                                </h4>
                                <p className="text-teal-600 font-medium">{geographicData.infrastructure.facilities.surauMushalla.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.surauMushalla.location}</p>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800 flex items-center">
                                    <span className="mr-2">🏪</span>BUMDes
                                </h4>
                                <p className="text-orange-600 font-medium">{geographicData.infrastructure.facilities.bumdes.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.bumdes.location}</p>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800 flex items-center">
                                    <span className="mr-2">🏥</span>Kesehatan
                                </h4>
                                <p className="text-red-600 font-medium">{geographicData.infrastructure.facilities.health.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.health.location}</p>
                                <p className="text-xs text-gray-500 mt-1">{geographicData.infrastructure.facilities.health.type}</p>
                            </div>
                            <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800 flex items-center">
                                    <span className="mr-2">📚</span>Perpustakaan
                                </h4>
                                <p className="text-pink-600 font-medium">{geographicData.infrastructure.facilities.library.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.library.location}</p>
                            </div>
                            <div className="p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800 flex items-center">
                                    <span className="mr-2">⚽</span>Lapangan Olahraga
                                </h4>
                                <p className="text-cyan-600 font-medium">{geographicData.infrastructure.facilities.sportsField.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.sportsField.location}</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-500 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800 flex items-center">
                                    <span className="mr-2">💧</span>PAM/PDAM
                                </h4>
                                <p className="text-slate-600 font-medium">{geographicData.infrastructure.facilities.pamPdam.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.pamPdam.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Transportasi & Pemerintahan - DIHAPUS */}
                </div>

                {/* Peta Placeholder dengan Animasi Keren */}
                <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-1000 ${mapLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Peta Wilayah</h2>
                    <div className={`relative bg-gradient-to-br from-blue-100 via-green-100 to-teal-100 rounded-lg h-64 overflow-hidden transition-all duration-1000 ${mapLoaded ? 'scale-100' : 'scale-95'}`}>
                        {/* Loading Animation */}
                        {!mapLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex space-x-2">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                                    <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                    <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                </div>
                            </div>
                        )}
                        
                        {/* Map Content dengan Animasi */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${mapLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            {/* Map Icons dengan Animasi Muncul */}
                            <div className="relative w-full h-full">
                                {/* Desa Center */}
                                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${mapLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                                    <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                                    <p className="text-xs font-bold text-gray-800 mt-1 whitespace-nowrap">Desa Tanjung Rambutan</p>
                                </div>
                                
                                {/* Boundaries */}
                                <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-300 ${mapLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <p className="text-xs text-green-700">Muara Jalai</p>
                                </div>
                                
                                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-400 ${mapLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <p className="text-xs text-yellow-700">Siabu</p>
                                </div>
                                
                                <div className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-all duration-700 delay-500 ${mapLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <p className="text-xs text-purple-700">Batu Belah</p>
                                </div>
                                
                                <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-700 delay-200 ${mapLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                    <p className="text-xs text-blue-700 font-medium">Simpang Kubu</p>
                                </div>
                                
                                {/* Animated Grid Lines */}
                                <div className={`absolute inset-0 transition-opacity duration-1000 delay-600 ${mapLoaded ? 'opacity-20' : 'opacity-0'}`}>
                                    <svg className="w-full h-full">
                                        <defs>
                                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="1"/>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Map Info */}
                        <div className={`absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md transition-all duration-700 delay-700 ${mapLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                            <p className="text-xs text-gray-600">Luas: {geographicData.location.area}</p>
                            <p className="text-xs text-gray-500">Desa Tanjung Rambutan</p>
                        </div>
                    </div>
                    
                    <div className={`mt-4 text-center transition-all duration-700 delay-800 ${mapLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-sm text-gray-500">Peta interaktif sedang dalam pengembangan</p>
                        <p className="text-xs text-gray-400">Akan terintegrasi dengan Google Maps</p>
                    </div>
                </div>

                {/* Batas Wilayah - Dipindahkan ke bawah */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Batas Wilayah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-red-50 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-md">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">U</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Utara</p>
                                    <p className="text-gray-600">{geographicData.boundaries.north}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-blue-50 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-md">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">S</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Selatan</p>
                                    <p className="text-gray-600">{geographicData.boundaries.south}</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-green-50 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-md">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">T</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Timur</p>
                                    <p className="text-gray-600">{geographicData.boundaries.east}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-yellow-50 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-md">
                                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">B</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Barat</p>
                                    <p className="text-gray-600">{geographicData.boundaries.west}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Geography;
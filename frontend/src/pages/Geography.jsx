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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
            {/* Hero Section */}
            <div className={`relative bg-gradient-to-r from-desa-green-600 to-desa-green-800 text-white py-24 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className={`text-center transition-all duration-700 ${visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                            Geografis Desa
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 mb-2 leading-relaxed">
                            Desa Tanjung Rambutan, Kecamatan Kampar Kiri, Kabupaten Kampar
                        </p>
                        <p className="text-lg text-green-200">
                            Provinsi Riau, Indonesia
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Lokasi & Luas Wilayah */}
                <div className={`bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-[1.02] transition-all duration-1000 ${visibleSections.location ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                    <div className="flex items-center mb-8">
                        <span className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                            </svg>
                        </span>
                        <h2 className="text-3xl font-bold text-desa-green-600">Luas Wilayah</h2>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Luas Wilayah</h3>
                        <p className="text-5xl font-bold text-blue-600 mb-3">{geographicData.location.area}</p>
                        <p className="text-gray-600 font-medium">Desa Tanjung Rambutan</p>
                    </div>
                </div>

                {/* Jarak Tempuh */}
                <div className={`bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-[1.02] transition-all duration-1000 delay-300 ${visibleSections.boundaries ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                    <div className="flex items-center mb-8">
                        <span className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                        </span>
                        <h2 className="text-3xl font-bold text-desa-green-600">Jarak Tempuh (Orbitas)</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 7a1 1 0 000 2h6a1 1 0 100-2H7zm0-3a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Ibukota Kecamatan</h3>
                            <p className="text-2xl font-bold text-blue-600 mb-1">{geographicData.distances.subDistrict.distance}</p>
                            <p className="text-sm text-gray-600">Waktu: {geographicData.distances.subDistrict.time}</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Ibukota Kabupaten</h3>
                            <p className="text-2xl font-bold text-green-600 mb-1">{geographicData.distances.regency.distance}</p>
                            <p className="text-sm text-gray-600">Waktu: {geographicData.distances.regency.time}</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Ibukota Provinsi</h3>
                            <p className="text-2xl font-bold text-purple-600 mb-1">{geographicData.distances.province.distance}</p>
                            <p className="text-sm text-gray-600">Waktu: {geographicData.distances.province.time}</p>
                        </div>
                    </div>
                </div>

                {/* Infrastruktur */}
                <div className={`bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-[1.02] transition-all duration-1000 delay-400 ${visibleSections.infrastructure ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                    <div className="flex items-center mb-8">
                        <span className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd"/>
                            </svg>
                        </span>
                        <h2 className="text-3xl font-bold text-desa-green-600">Infrastruktur Desa</h2>
                    </div>
                    
                    {/* Lembaga Pendidikan */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                </svg>
                            </span>
                            Lembaga Pendidikan
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">TK/PAUD</h4>
                                <p className="text-blue-600 font-medium text-lg">{geographicData.infrastructure.education.tkPaud.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.tkPaud.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">SD/MI</h4>
                                <p className="text-green-600 font-medium text-lg">{geographicData.infrastructure.education.sdMi.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.sdMi.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">SLTP/MTs</h4>
                                <p className="text-yellow-600 font-medium text-lg">{geographicData.infrastructure.education.sltpMts.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.sltpMts.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">SLTA/MA</h4>
                                <p className="text-purple-600 font-medium text-lg">{geographicData.infrastructure.education.sltaMa.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.sltaMa.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">PDTA</h4>
                                <p className="text-indigo-600 font-medium text-lg">{geographicData.infrastructure.education.pdta.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.education.pdta.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sarana dan Prasarana */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                            <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd"/>
                                </svg>
                            </span>
                            Sarana dan Prasarana
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">Masjid</h4>
                                <p className="text-emerald-600 font-medium text-lg">{geographicData.infrastructure.facilities.masjid.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.masjid.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">Surau/Mushalla</h4>
                                <p className="text-teal-600 font-medium text-lg">{geographicData.infrastructure.facilities.surauMushalla.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.surauMushalla.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">BUMDes</h4>
                                <p className="text-orange-600 font-medium text-lg">{geographicData.infrastructure.facilities.bumdes.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.bumdes.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">Kesehatan</h4>
                                <p className="text-red-600 font-medium text-lg">{geographicData.infrastructure.facilities.health.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.health.location}</p>
                                <p className="text-xs text-gray-500 mt-1">{geographicData.infrastructure.facilities.health.type}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">Perpustakaan</h4>
                                <p className="text-pink-600 font-medium text-lg">{geographicData.infrastructure.facilities.library.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.library.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">Lapangan Olahraga</h4>
                                <p className="text-cyan-600 font-medium text-lg">{geographicData.infrastructure.facilities.sportsField.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.sportsField.location}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 transform hover:scale-105 transition-all duration-300">
                                <h4 className="font-semibold text-gray-800">PAM/PDAM</h4>
                                <p className="text-slate-600 font-medium text-lg">{geographicData.infrastructure.facilities.pamPdam.count}</p>
                                <p className="text-sm text-gray-600">Lokasi: {geographicData.infrastructure.facilities.pamPdam.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Transportasi & Pemerintahan - DIHAPUS */}
                </div>

                {/* Peta Placeholder */}
                <div className={`bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-[1.02] transition-all duration-1000 ${mapLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}>
                    <div className="flex items-center mb-8">
                        <span className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"/>
                            </svg>
                        </span>
                        <h2 className="text-3xl font-bold text-desa-green-600">Peta Wilayah</h2>
                    </div>
                    <div className={`relative bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl h-64 overflow-hidden border border-indigo-200 transition-all duration-1000 ${mapLoaded ? 'scale-100' : 'scale-95'}`}>
                        {/* Loading Animation */}
                        {!mapLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                </div>
                            </div>
                        )}
                        
                        {/* Map Content */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${mapLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="relative w-full h-full">
                                {/* Desa Center */}
                                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${mapLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                                    <div className="w-4 h-4 bg-indigo-600 rounded-full animate-pulse"></div>
                                    <p className="text-xs font-bold text-indigo-800 mt-1 whitespace-nowrap">Desa Tanjung Rambutan</p>
                                </div>
                                
                                {/* Boundaries */}
                                <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-300 ${mapLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <p className="text-xs text-blue-700 font-medium">Muara Jalai</p>
                                </div>
                                
                                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-400 ${mapLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <p className="text-xs text-green-700 font-medium">Siabu</p>
                                </div>
                                
                                <div className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-all duration-700 delay-500 ${mapLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <p className="text-xs text-purple-700 font-medium">Batu Belah</p>
                                </div>
                                
                                <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-700 delay-200 ${mapLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <p className="text-xs text-orange-700 font-medium">Simpang Kubu</p>
                                </div>
                                
                                {/* Grid Lines */}
                                <div className={`absolute inset-0 transition-opacity duration-1000 delay-600 ${mapLoaded ? 'opacity-10' : 'opacity-0'}`}>
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

                {/* Batas Wilayah */}
                <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center mb-8">
                        <span className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
                            </svg>
                        </span>
                        <h2 className="text-3xl font-bold text-desa-green-600">Batas Wilayah</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 transform hover:scale-105 transition-all duration-300">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">U</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Utara</p>
                                    <p className="text-gray-600">{geographicData.boundaries.north}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 transform hover:scale-105 transition-all duration-300">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Selatan</p>
                                    <p className="text-gray-600">{geographicData.boundaries.south}</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 transform hover:scale-105 transition-all duration-300">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">T</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Timur</p>
                                    <p className="text-gray-600">{geographicData.boundaries.east}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200 transform hover:scale-105 transition-all duration-300">
                                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">B</div>
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
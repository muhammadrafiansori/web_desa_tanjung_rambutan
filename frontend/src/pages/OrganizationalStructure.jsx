import React, { useState, useEffect } from 'react';
import { Icon, FaUser } from '../components/Icons';

const OrganizationalStructure = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleSections, setVisibleSections] = useState({
        header: false,
        kepalaDesa: false,
        sekretaris: false,
        kaur: false,
        kasi: false,
        kadus: false,
        footer: false
    });

    useEffect(() => {
        // Trigger loading animation sequence
        const loadingSequence = async () => {
            setIsLoaded(true);
            
            // Animate sections in sequence with delays
            const delays = [
                { section: 'header', delay: 200 },
                { section: 'kepalaDesa', delay: 600 },
                { section: 'sekretaris', delay: 1000 },
                { section: 'kaur', delay: 1400 },
                { section: 'kasi', delay: 1800 },
                { section: 'kadus', delay: 2200 },
                { section: 'footer', delay: 2600 }
            ];

            delays.forEach(({ section, delay }) => {
                setTimeout(() => {
                    setVisibleSections(prev => ({ ...prev, [section]: true }));
                }, delay);
            });
        };

        loadingSequence();
    }, []);
    // Struktur data berdasarkan hierarki organisasi
    const organizationData = {
        kepalaDesa: {
            name: "DEDI WAHYUDI, SE.MM",
            position: "Kepala Desa",
            image: "/foto/DediWahyudi.jpg",
            position_style: "center 10%"
        },
        sekretarisDesa: {
            name: "FITRI HIDAYATI, S.Pd",
            position: "Sekretaris Desa",
            image: "/foto/FitriHidayati.jpg",
            position_style: "center 15%"
        },
        kaur: [
            {
                name: "ISMAIL SALEH, S.Pd",
                position: "Kepala Urusan Keuangan",
                image: "/foto/IsmailSaleh.jpg",
                position_style: "center 20%"
            },
            {
                name: "FEBBY SYIPELNI",
                position: "Kepala Urusan Tata Usaha dan Umum",
                image: "/foto/FebbySyipelni.jpg",
                position_style: "center 35%"
            },
            {
                name: "AHMAD RAFI, S.Sos",
                position: "Kepala Urusan Perencanaan",
                image: "/foto/AhmadRfi.jpg",
                position_style: "center 15%"
            }
        ],
        kasi: [
            {
                name: "ILVIA AYUNITA, SP",
                position: "Kepala Seksi Pemerintahan",
                image: "/foto/IlviaAyunita.jpg",
                position_style: "center 20%"
            },
            {
                name: "DARNIS SUSANTI, SE",
                position: "Kepala Seksi Kesejahteraan",
                image: "/foto/DarnisSusanti.jpg",
                position_style: "center 30%"
            },
            {
                name: "NURUL DAYANA, S.Farm",
                position: "Kepala Seksi Pelayanan",
                image: "/foto/NurulDayana.jpg",
                position_style: "center 25%"
            }
        ],
        kadus: [
            {
                name: "IKWANUL KHAIDIR, S.Pd",
                position: "Kepala Dusun I",
                image: "/foto/IkhwanulKhaidirKadus1.jpg",
                position_style: "center 35%"
            },
            {
                name: "SUARLI ANDRI PRANATA",
                position: "Kepala Dusun II",
                image: "/foto/Suarli Andri kadus 2.jpg",
                position_style: "center 40%"
            },
            {
                name: "HADI PURNOMO, SE",
                position: "Kepala Dusun III",
                image: "/foto/hadiPurnomoKadus3.jpg",
                position_style: "center 15%"
            },
            {
                name: "FARHAN FURQAN",
                position: "Kepala Dusun IV",
                image: "/foto/FarhanFurqanKadus4.jpg",
                position_style: "center 20%"
            }
        ]
    };

    // Komponen untuk card profil
    const ProfileCard = ({ official, size = "normal" }) => {
        const cardSizes = {
            large: "w-72 sm:w-80 h-[24rem] sm:h-[26rem]",  // Responsive sizing
            normal: "w-60 sm:w-64 h-[18rem] sm:h-[20rem]",
            small: "w-52 sm:w-56 h-[16rem] sm:h-[18rem]"
        };

        const imageSizes = {
            large: "h-64",
            normal: "h-48", // Slightly smaller to balance with new card content
            small: "h-40"
        };

        return (
            <div className={`${cardSizes[size]} bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
                {/* Photo Container with Better Styling */}
                <div className={`${imageSizes[size]} w-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden`}>
                    {/* Photo Frame Effect */}
                    <div className="absolute inset-2 bg-white rounded-lg shadow-inner overflow-hidden">
                        <img
                            src={official.image}
                            alt={official.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            style={{
                                objectPosition: official.position_style || "center center"
                            }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Professional Fallback */}
                        <div className="w-full h-full bg-gradient-to-br from-desa-green-50 to-desa-green-100 flex flex-col items-center justify-center" style={{ display: 'none' }}>
                            <div className="w-16 h-16 bg-desa-green-200 rounded-full flex items-center justify-center mb-2">
                                <Icon icon={FaUser} size="lg" className="text-desa-green-600" />
                            </div>
                            <p className="text-xs text-desa-green-600 font-medium">Foto Official</p>
                        </div>
                    </div>


                </div>

                {/* Card Information Section */}
                <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                    <div className="text-center">
                        <h3 className={`font-bold text-gray-900 mb-3 leading-tight ${size === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                            }`}>
                            {official.name}
                        </h3>
                        <div className="w-10 sm:w-12 h-0.5 bg-desa-green-400 mx-auto mb-3"></div>
                        <p className={`text-desa-green-700 font-semibold leading-relaxed px-1 ${size === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                            }`}>
                            {official.position}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    // Komponen connecting line
    const ConnectingLine = ({ orientation = "vertical", length = "4rem" }) => {
        if (orientation === "vertical") {
            return <div className="w-0.5 bg-desa-green-400 mx-auto" style={{ height: length }}></div>;
        } else {
            return <div className="h-0.5 bg-desa-green-400 my-auto" style={{ width: length }}></div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
                    visibleSections.header 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                }`}>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Struktur Organisasi
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-2 px-4">
                        Pemerintahan Desa Tanjung Rambutan
                    </p>
                    <div className="w-20 sm:w-24 h-1 bg-desa-green-600 mx-auto rounded"></div>
                </div>

                {/* Organizational Chart */}
                <div className="space-y-6 sm:space-y-8">

                    {/* Level 1: Kepala Desa */}
                    <div className={`flex justify-center transition-all duration-1000 delay-300 ${
                        visibleSections.kepalaDesa 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-12 scale-95'
                    }`}>
                        <ProfileCard official={organizationData.kepalaDesa} size="large" />
                    </div>

                    {/* Connecting line */}
                    <div className={`transition-all duration-700 delay-500 ${
                        visibleSections.kepalaDesa ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}>
                        <ConnectingLine />
                    </div>

                    {/* Level 2: Sekretaris Desa */}
                    <div className={`flex justify-center transition-all duration-1000 delay-700 ${
                        visibleSections.sekretaris 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-12 scale-95'
                    }`}>
                        <ProfileCard official={organizationData.sekretarisDesa} size="normal" />
                    </div>

                    {/* Connecting line */}
                    <div className={`transition-all duration-700 delay-900 ${
                        visibleSections.sekretaris ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}>
                        <ConnectingLine />
                    </div>

                    {/* Level 3: Kepala Urusan */}
                    <div className={`relative transition-all duration-1000 delay-1000 ${
                        visibleSections.kaur 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-12'
                    }`}>
                        {/* Horizontal connecting lines - Hidden on mobile */}
                        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-desa-green-400"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center pt-6 sm:pt-8">
                            {organizationData.kaur.map((official, index) => (
                                <div key={index} className={`relative transition-all duration-800 ${
                                    visibleSections.kaur 
                                        ? 'opacity-100 translate-y-0 scale-100' 
                                        : 'opacity-0 translate-y-8 scale-95'
                                }`} style={{ 
                                    transitionDelay: visibleSections.kaur ? `${1200 + index * 200}ms` : '0ms' 
                                }}>
                                    {/* Vertical line from horizontal line to card - Hidden on mobile */}
                                    <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-desa-green-400 -mt-8"></div>
                                    <ProfileCard official={official} size="normal" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Connecting line */}
                    <div className={`transition-all duration-700 delay-1500 ${
                        visibleSections.kaur ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}>
                        <ConnectingLine length="6rem" />
                    </div>

                    {/* Level 4: Kepala Seksi */}
                    <div className={`relative transition-all duration-1000 delay-1300 ${
                        visibleSections.kasi 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-12'
                    }`}>
                        {/* Horizontal connecting lines - Hidden on mobile */}
                        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-desa-green-400"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center pt-6 sm:pt-8">
                            {organizationData.kasi.map((official, index) => (
                                <div key={index} className={`relative transition-all duration-800 ${
                                    visibleSections.kasi 
                                        ? 'opacity-100 translate-y-0 scale-100' 
                                        : 'opacity-0 translate-y-8 scale-95'
                                }`} style={{ 
                                    transitionDelay: visibleSections.kasi ? `${1500 + index * 200}ms` : '0ms' 
                                }}>
                                    {/* Vertical line from horizontal line to card - Hidden on mobile */}
                                    <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-desa-green-400 -mt-8"></div>
                                    <ProfileCard official={official} size="normal" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Connecting line */}
                    <div className={`transition-all duration-700 delay-1800 ${
                        visibleSections.kasi ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}>
                        <ConnectingLine length="6rem" />
                    </div>

                    {/* Level 5: Kepala Dusun */}
                    <div className={`relative transition-all duration-1000 delay-1600 ${
                        visibleSections.kadus 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-12'
                    }`}>
                        {/* Horizontal connecting lines - Hidden on mobile */}
                        <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 bg-desa-green-400"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center pt-6 sm:pt-8">
                            {organizationData.kadus.map((official, index) => (
                                <div key={index} className={`relative transition-all duration-800 ${
                                    visibleSections.kadus 
                                        ? 'opacity-100 translate-y-0 scale-100' 
                                        : 'opacity-0 translate-y-8 scale-95'
                                }`} style={{ 
                                    transitionDelay: visibleSections.kadus ? `${2000 + index * 150}ms` : '0ms' 
                                }}>
                                    {/* Vertical line from horizontal line to card - Hidden on mobile */}
                                    <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-desa-green-400 -mt-8"></div>
                                    <ProfileCard official={official} size="small" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer info */}
                <div className={`mt-12 sm:mt-16 text-center px-4 transition-all duration-1000 ${
                    visibleSections.footer 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                }`}>
                    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-2xl mx-auto transform transition-all duration-700 hover:shadow-lg hover:scale-105">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                            Informasi Struktur Organisasi
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Struktur organisasi Pemerintahan Desa Tanjung Rambutan sesuai dengan
                            Peraturan Menteri Dalam Negeri tentang Organisasi dan Tata Kerja Pemerintah Desa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationalStructure;

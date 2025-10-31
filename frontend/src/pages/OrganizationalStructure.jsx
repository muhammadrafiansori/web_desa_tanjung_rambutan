import React from 'react';

const OrganizationalStructure = () => {
    const officials = [
        {
            name: "DEDI WAHYUDI, SE.MM",
            position: "Kepala Desa",
            image: "/foto/DediWahyudi.jpg",
            position_style: "center 10%"
        },
        {
            name: "FITRI HIDAYATI, S.Pd",
            position: "Sekretaris Desa",
            image: "/foto/FitriHidayati.jpg",
            position_style: "center 15%"
        },
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
        },
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
        },
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
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                        Struktur Organisasi
                    </h1>
                    <p className="mt-3 text-xl text-gray-600">
                        Desa Tanjung Rambutan
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {officials.map((official, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                        >
                            <div className="h-80 w-full overflow-hidden bg-gray-100 rounded-t-lg relative">
                                <img
                                    src={official.image}
                                    alt={official.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{ 
                                        objectPosition: official.position_style,
                                        transform: 'scale(1.05)'
                                    }}
                                    onError={(e) => {
                                        e.target.src = '/images/profile-default.png';
                                    }}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {official.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {official.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrganizationalStructure;

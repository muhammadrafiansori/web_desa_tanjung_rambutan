import React from 'react';

const OrganizationalStructure = () => {
    const officials = [
        {
            name: "DEDI WAHYUDI, SE.MM",
            position: "Kepala Desa",
            image: "/foto/images.jpg"
        },
        {
            name: "FITRI HIDAYATI, S.Pd",
            position: "Sekretaris Desa",
            image: "/images/profile-default.png"
        },
        {
            name: "ISMAIL SALEH, S.Pd",
            position: "Kepala Urusan Keuangan",
            image: "/images/profile-default.png"
        },
        {
            name: "FEBBY SYIPELNI",
            position: "Kepala Urusan Tata Usaha dan Umum",
            image: "/images/profile-default.png"
        },
        {
            name: "AHMAD RAFI, S.Sos",
            position: "Kepala Urusan Perencanaan",
            image: "/images/profile-default.png"
        },
        {
            name: "ILVIA AYUNITA, SP",
            position: "Kepala Seksi Pemerintahan",
            image: "/images/profile-default.png"
        },
        {
            name: "DARNIS SUSANTI, SE",
            position: "Kepala Seksi Kesejahteraan",
            image: "/images/profile-default.png"
        },
        {
            name: "NURUL DAYANA, S.Farm",
            position: "Kepala Seksi Pelayanan",
            image: "/images/profile-default.png"
        },
        {
            name: "IKWANUL KHAIDIR, S.Pd",
            position: "Kepala Dusun I",
            image: "/images/profile-default.png"
        },
        {
            name: "SUARLI ANDRI PRANATA",
            position: "Kepala Dusun II",
            image: "/images/profile-default.png"
        },
        {
            name: "HADI PURNOMO, SE",
            position: "Kepala Dusun III",
            image: "/images/profile-default.png"
        },
        {
            name: "FARHAN FURQAN",
            position: "Kepala Dusun IV",
            image: "/images/profile-default.png"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Struktur Organisasi
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        Desa Tanjung Rambutan
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {officials.map((official, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={official.image}
                                    alt={official.name}
                                    className="w-full h-full object-cover"
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

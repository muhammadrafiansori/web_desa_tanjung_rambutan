import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-village-primary to-village-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Tentang Desa Tanjung Rambutan
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Mengenal lebih dekat sejarah, visi misi, dan profil lengkap Desa Tanjung Rambutan
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Sejarah Desa */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Sejarah Desa
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Desa Tanjung Rambutan memiliki sejarah panjang yang dimulai dari era kolonial.
                                Nama "Tanjung Rambutan" berasal dari bahasa Melayu yang bermakna tanjung yang
                                ditumbuhi pohon rambutan.
                            </p>
                            <p>
                                Desa ini terkenal dengan keindahan alamnya dan masyarakat yang ramah.
                                Sejak kemerdekaan Indonesia, Tanjung Rambutan terus berkembang menjadi
                                salah satu desa percontohan di wilayah ini.
                            </p>
                            <p>
                                Saat ini, desa kami memiliki berbagai fasilitas modern sambil tetap
                                mempertahankan nilai-nilai tradisional dan kearifan lokal.
                            </p>
                        </div>
                    </div>

                    {/* Gambar/Video Placeholder */}
                    <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-500">Foto Sejarah Desa</p>
                        </div>
                    </div>
                </div>

                {/* Visi Misi */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Visi & Misi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Visi */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-village-primary rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 ml-4">Visi</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                "Mewujudkan Desa Tanjung Rambutan yang maju, mandiri, sejahtera,
                                berdasarkan nilai-nilai gotong royong dan kearifan lokal untuk
                                kesejahteraan masyarakat yang berkelanjutan."
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-village-secondary rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 ml-4">Misi</h3>
                            </div>
                            <ul className="text-gray-700 space-y-3">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-village-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Meningkatkan kualitas pelayanan publik yang efektif dan efisien
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-village-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Mengembangkan potensi ekonomi desa berbasis kearifan lokal
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-village-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Memperkuat tata kelola pemerintahan desa yang transparan
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-village-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Meningkatkan kesejahteraan masyarakat melalui program pemberdayaan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Data Demografis */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Data Demografis
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Total Penduduk', value: '2.847', unit: 'jiwa', icon: '👥' },
                            { label: 'Jumlah KK', value: '756', unit: 'kepala keluarga', icon: '🏠' },
                            { label: 'Luas Wilayah', value: '12.5', unit: 'km²', icon: '🗺️' },
                            { label: 'Jumlah RT/RW', value: '15/5', unit: 'RT/RW', icon: '🏘️' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="text-3xl mb-3">{stat.icon}</div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600">{stat.unit}</div>
                                <div className="text-gray-800 font-medium mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Struktur Pemerintahan */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Struktur Pemerintahan Desa
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <div className="text-center mb-8">
                            <div className="inline-block bg-village-primary text-white px-6 py-3 rounded-lg">
                                <h3 className="font-bold text-lg">Kepala Desa</h3>
                                <p className="text-sm opacity-90">Bapak H. Ahmad Suharto</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { jabatan: 'Sekretaris Desa', nama: 'Ibu Sri Wahyuni, S.Sos' },
                                { jabatan: 'Kaur Keuangan', nama: 'Bapak Bambang Susilo' },
                                { jabatan: 'Kaur Umum', nama: 'Ibu Siti Aminah' }
                            ].map((staff, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900">{staff.jabatan}</h4>
                                    <p className="text-sm text-gray-600">{staff.nama}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fasilitas Desa */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Fasilitas Desa
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Balai Desa', desc: 'Pusat kegiatan pemerintahan dan kemasyarakatan', icon: '🏛️' },
                            { name: 'Puskesmas', desc: 'Fasilitas kesehatan masyarakat', icon: '🏥' },
                            { name: 'Sekolah Dasar', desc: '3 unit SD negeri dan swasta', icon: '🏫' },
                            { name: 'Masjid', desc: '5 masjid dan musholla', icon: '🕌' },
                            { name: 'Pasar Desa', desc: 'Pusat perdagangan lokal', icon: '🏪' },
                            { name: 'Lapangan Olahraga', desc: 'Fasilitas olahraga dan rekreasi', icon: '⚽' }
                        ].map((facility, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-4xl mb-4">{facility.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{facility.name}</h3>
                                <p className="text-gray-600 text-sm">{facility.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
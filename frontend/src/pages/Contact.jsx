import React from 'react';

const Contact = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-desa-green-600 to-desa-green-700 text-white py-20">
                <div className="max-w-6xl mx-auto px-5 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Hubungi Kami
                    </h1>
                    <p className="text-xl text-desa-green-100 max-w-3xl mx-auto">
                        Kami siap melayani dan membantu Anda. Jangan ragu untuk menghubungi kami melalui berbagai cara di bawah ini.
                    </p>
                </div>
            </section>

            {/* Contact Information & Actions */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-5">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Informasi Kontak
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hubungi kami melalui berbagai cara yang tersedia di bawah ini
                        </p>
                    </div>

                    {/* Contact Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {/* Address Card */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-desa-green-100 text-desa-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Alamat Kantor</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Jln Kemuning Desa Tanjung Rambutan<br />
                                        Kecamatan Kampar, Kabupaten Kampar<br />
                                        Provinsi Riau, Kode Pos 28461
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Operating Hours Card */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                                    <div className="text-sm text-gray-600 space-y-1">
                                        <div>Senin - Jumat: 08:00 - 15:30</div>
                                        <div className="text-red-600">Sabtu, Minggu & Hari Libur: Tutup</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Methods */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            Hubungi Kami
                        </h3>
                        
                        <div className="grid gap-4">
                            {/* WhatsApp */}
                            <div className="border border-green-200 rounded-lg p-4 hover:border-green-300 hover:bg-green-50 transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">WhatsApp</div>
                                            <div className="text-sm text-gray-600">Chat langsung untuk respon cepat</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href="https://wa.me/6285267556489"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors"
                                        >
                                            Kepala Desa
                                        </a>
                                        <a
                                            href="https://wa.me/6285355740112"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors"
                                        >
                                            Sekretaris
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="border border-blue-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">Telepon</div>
                                            <div className="text-sm text-gray-600">Hubungi langsung untuk urusan mendesak</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href="tel:+6285267556489"
                                            className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
                                        >
                                            Kepala Desa
                                        </a>
                                        <a
                                            href="tel:+6285355740112"
                                            className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
                                        >
                                            Sekretaris
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="border border-red-200 rounded-lg p-4 hover:border-red-300 hover:bg-red-50 transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">Email</div>
                                            <div className="text-sm text-gray-600">Untuk pengaduan formal & dokumentasi</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href="mailto:desa.tanjungrambutan@gmail.com"
                                            className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors"
                                        >
                                            Email Desa
                                        </a>
                                        <a
                                            href="mailto:kepala.desa.tanjungrambutan@gmail.com"
                                            className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors"
                                        >
                                            Kepala Desa
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Maps */}
                            <div className="border border-orange-200 rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50 transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">Lokasi</div>
                                            <div className="text-sm text-gray-600">Lihat lokasi kantor desa</div>
                                        </div>
                                    </div>
                                    <a
                                        href="https://maps.google.com/maps?ll=0.310596,101.083200&z=13&t=m&hl=id&gl=ID&mapclient=embed&q=Tanjung+Rambutan+Kampar+Riau"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600 transition-colors"
                                    >
                                        Buka Maps
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="text-center">
                                <h4 className="font-medium text-blue-900 mb-2">💡 Tips</h4>
                                <p className="text-sm text-blue-800">
                                    Gunakan <strong>WhatsApp</strong> untuk pertanyaan cepat, <strong>Email</strong> untuk urusan formal, 
                                    <strong>Telepon</strong> untuk mendesak, atau <strong>datang langsung</strong> untuk pelayanan administrasi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
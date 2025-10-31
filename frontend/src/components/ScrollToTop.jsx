import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll ke atas setiap kali pathname berubah (pindah halaman)
        // Menggunakan setTimeout untuk memastikan DOM sudah ter-render
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);

        // Cleanup timer jika component unmount
        return () => clearTimeout(timer);

        // Alternatif dengan smooth scroll (uncomment jika diinginkan):
        // const smoothTimer = setTimeout(() => {
        //     window.scrollTo({
        //         top: 0,
        //         left: 0,
        //         behavior: 'smooth'
        //     });
        // }, 100);
        // return () => clearTimeout(smoothTimer);
    }, [pathname]);

    return null; // Komponen ini tidak render apapun
};

export default ScrollToTop;
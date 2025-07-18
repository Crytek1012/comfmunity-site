'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navbarStyles from './navbar.module.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const handleLinkClick = () => setMenuOpen(false);
    const pathname = usePathname();

    return (
        <nav className={navbarStyles.navbar}>

            <div className={navbarStyles.logoContainer}>
                <Link href="/" className={navbarStyles.logoContainer}
                    onClick={e => {
                        e.preventDefault();
                        window.location.href = '/';
                    }}>
                    <Image
                        src="/noelle_comf.png"
                        alt="Logo"
                        height={40}
                        width={40}
                        className={navbarStyles.logo}
                        priority
                    />
                    <span className={navbarStyles.logoSpan}>Comfmunity</span>
                </Link>
            </div>

            <div className={navbarStyles.menuToggle} onClick={toggleMenu}>☰</div>

            <div className={`${navbarStyles.navigationContainer} ${menuOpen ? navbarStyles.open : ''}`}>
                <Link href="/" onClick={handleLinkClick} className={pathname === '/' ? navbarStyles.active : ''}>Home</Link>
                <Link href="/about" onClick={handleLinkClick} className={pathname === '/about' ? navbarStyles.active : ''}>About</Link>
                <Link href="/banshare" onClick={handleLinkClick} className={pathname === '/banshare' ? navbarStyles.active : ''}>Banshare</Link>
                <Link
                    href="https://discord.gg/noelle"
                    onClick={handleLinkClick}
                >Discord
                </Link>
            </div>
        </nav>
    );
}

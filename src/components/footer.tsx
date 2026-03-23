import Link from 'next/link';
import footerStyles from './footer.module.css'

export default function Footer() {
    return <footer className={footerStyles.footer}>
        <Link href="/terms">Terms Of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="https://discord.gg/noelle">Discord</Link>
    </footer>
}
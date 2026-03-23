import ConnectionsCount from '@/components/connections-count';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return <div className={styles.container}>
    <h1 className={styles.title}>Comfmunity</h1>

    <p className={styles.block}>
      We are a comfy community of Discord servers dedicated to gacha games.
    </p>

    <div className={styles.row}>
      <p className={styles.smallBlock}>
        All the servers are connected through our inter-server chat, which automatically relays messages.
      </p>
      <p className={styles.smallBlock}>
        We host seasonal events where users can register from their server and compete against other teams.
      </p>
    </div>

    <p className={styles.block}>
      With <ConnectionsCount /> servers from communities like Genshin Impact, Honkai: Star Rail, Honkai Impact 3rd, Wuthering Waves, Zenless Zone Zero, and more!
      <br /><br />
      As long as it features gacha-related content, it&apos;s comfy enough for us.
    </p>

    <p className={styles.block}>
      Interested? We&apos;d love to have you!
      <br /><br />
      Join our Discord server and contact our administrator, Red.
    </p>

    <Link href='https://discord.gg/noelle' target='_blank' className={styles.inviteContainer}>
      <Image
        src="/discord_logo.webp"
        alt="Join our Discord server"
        height={100}
        width={100}
        className={styles.inviteLogo}
        priority
      />
      <span>Join us</span>
    </Link>
  </div>
}

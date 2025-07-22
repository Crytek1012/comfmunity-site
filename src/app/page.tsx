import ConnectionsCount from '@/components/connections-count';
import styles from './page.module.css';
import { database } from '@/lib/database';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const db = await database();
  const connectionSize = await db.connections.collection.countDocuments();

  return <div className={styles.pageWrapper}>
    <div className={styles.container}>
      <div className={styles.title}>Comfmunity</div>

      <section className={styles.block}>
        We are a comfy community of Discord servers dedicated to gacha games.
      </section>

      <div className={styles.row}>
        <section className={styles.smallBlock}>
          All the servers are connected through our inter-server chat, which automatically relays messages.
        </section>
        <section className={styles.smallBlock}>
          We host seasonal events where users can register from their server and compete against other teams.
        </section>
      </div>

      <section className={styles.block}>
        With <ConnectionsCount count={connectionSize} /> servers from communities like Genshin Impact, Honkai: Star Rail, Honkai Impact 3rd, Wuthering Waves, Zenless Zone Zero, and more!
        <br /><br />
        As long as it features gacha-related content, it&apos;s comfy enough for us.
      </section>

      <section className={styles.block}>
        Interested? We&apos;d love to have you!
        <br /><br />
        Join our Discord server and contact our administrator, Red.
      </section>

      <Link href='https://discord.gg/noelle' target='_blank' className={styles.inviteContainer}>
        <Image
          src="/discord_logo.webp"
          alt="Discord"
          height={100}
          width={100}
          className={styles.inviteLogo}
          priority
        />
        <p>Join us</p>
      </Link>
    </div>

  </div>;
}

import styles from './page.module.css';

export const metadata = {
    title: 'About - Comfmunity',
    description: 'Learn more about the Comfmunity network.',
};

export default function AboutPage() {
    return <div className={styles.pageWrapper}>
        <div className={styles.title}>
            About Our Comfy Place
        </div>

        <section className={styles.section}>
            <h1>What exactly is it?</h1>
            <p>
                The Comfmunity is a network of servers on Discord that allows users to communicate with one another from the comfort of their server.
                Messages sent in the designated channel are relayed to all the connections via our bot.
            </p>
        </section>

        <section className={styles.section}>
            <h1>What are the requirements?</h1>
            <p>To join the network, servers must meet the following requirements:</p>
            <ol>
                <li>Feature gacha-related content.</li>
                <li>Have an active staff and a proper management structure.</li>
                <li>Enforce a NSFW management policy.</li>
                <li>Willingness to participate in our events.</li>
            </ol>
            <p>There are no minimum server member requirements, and we&apos;re enthusiastic about reaching out to many of the smaller servers!</p>
        </section>

        <section className={styles.section}>
            <h1>Forbidden Content?</h1>
            <p>
                We strictly prohibit anything that violates <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer">Discord&apos;s ToS</a> and anything that may disrupt a friendly environment.
                We also enforce a strict no NSFW policy that must be respected at all times.
            </p>
        </section>

        <section className={styles.section}>
            <h1>How to apply?</h1>
            <p>
                Join the <a href="https://discord.gg/noelle" target="_blank" rel="noopener noreferrer">Noelle Mains Armoured Goddess</a> discord server and contact our administrator, Red.
                Your server will go through a quick assessment to ensure it meets our requirements.
                <br />
                If accepted, we’ll guide you through connecting.
                <br />
                If not, we’ll explain why and what needs to be done for approval.
            </p>
        </section>
    </div >
}
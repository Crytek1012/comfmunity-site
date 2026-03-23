import styles from './page.module.css';

export const metadata = {
    title: 'Terms of Service - Comfmunity',
    description: 'Comfmunity\'s Terms of Service',
};

export default function TermsOfServicePage() {
    return <div className={styles.pageWrapper}>
        <div className={styles.title}>
            Terms Of Service
        </div>

        <div className={styles.description}>
            <p>
                Effective Date: July 26, 2024
                <br />
                <br />
                Welcome to Comfmunity, a Discord bot for inter-server communication between gacha-related servers. By using Comfmunity, you agree to the following Terms of Service (TOS), as well to Discord&apos;s Terms of Service and Privacy Policy.
                <br />
                Discord&apos;s Terms of Service: <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer">https://discord.com/terms</a>
                <br />
                Discord&apos;s Privacy Policy: <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer">https://discord.com/privacy</a>
            </p>
        </div>

        <section className={styles.section}>
            <h1>Purpose</h1>
            <p>
                Comfmunity is a Discord bot built to connect gacha-related servers on Discord. We use our inter-server chat to let users from different communities communicate and share their experiences, and organize events for all participating communities to join and enjoy together.
            </p>
        </section>

        <section className={styles.section}>
            <h1>Ownership</h1>
            <p>The Comfmunity is owned and operated by the Discord server known as Noelle Mains Armoured-Goddess.</p>
        </section>

        <section className={styles.section}>
            <h1>Eligibility</h1>
            <p>
                You must be at least 13 years of age to use Comfmunity, in accordance with Discord&apos;s Terms of Service. By accessing or using the bot, you represent and warrant that you meet this age requirement.
            </p>
        </section>

        <section className={styles.section}>
            <h1>Data Collection</h1>
            <p>
                Comfmunity collects basic user data necessary for the operation of the bot. This includes but is not limited to information required for service functionality and system performance.
            </p>
        </section>

        <section className={styles.section}>
            <h1>Use of Data</h1>
            <p>
                The data collected is utilized solely for the purposes of improving the functionality and performance of Comfmunity, as well as for logging system activities. We do not use this data for any other purposes.            </p>
        </section>

        <section className={styles.section}>
            <h1>Data Sharing</h1>
            <p>
                Comfmunity does not share any user data with third parties. All data remains within the operational scope of the bot and is handled in accordance with these Terms.            </p>
        </section>

        <section className={styles.section}>
            <h1>User Conduct</h1>
            <p>
                You agree to adhere to Discord&apos;s Terms of Service and Privacy Policy while using Comfmunity. Additionally, you must not engage in any behavior that disrupts or interferes with the normal operation of the bot or the services it provides. Prohibited activities include, but are not limited to, spamming, harassment, or any actions that may damage or impair the service.            </p>
        </section>

        <section className={styles.section}>
            <h1>Consequences of Violation</h1>
            <p>
                Any breach of these Terms may result in immediate suspension or permanent ban from using Comfmunity. We reserve the right to take any actions necessary to enforce these Terms and protect the integrity of the service.            </p>
        </section>

        <section className={styles.section}>
            <h1>Disclaimers</h1>
            <p>
                Comfmunity is provided on an “as-is” and “as-available” basis. We make no warranties or representations regarding the bot&apos;s performance or availability. To the fullest extent permitted by law, we disclaim all warranties, whether express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.            </p>
        </section>

        <section className={styles.section}>
            <h1>Amendments to Terms</h1>
            <p>
                We reserve the right to modify these Terms of Service at any time. Any changes will be communicated through an announcement within the Noelle Mains Armoured-Goddess Discord server. Continued use of Comfmunity following such modifications constitutes acceptance of the revised Terms.            </p>
        </section>

        <section className={styles.section}>
            <h1>Contact Information</h1>
            <p>
                For support, inquiries, or additional information, please reach out to us through the <a href="https://discord.gg/noelle" target="_blank" rel="noopener noreferrer">Noelle Mains Armoured-Goddess</a> discord server.            </p>
        </section>
    </div >
}
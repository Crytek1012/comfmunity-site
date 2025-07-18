import styles from './page.module.css';

export default function PrivacyPolicyPage() {
    return <div className={styles.pageWrapper}>
        <div className={styles.title}>
            Privacy Policy
        </div>

        <div className={styles.description}>
            <p>
                Comfmunity is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Discord bot. By using Comfmunity, you agree to the collection and use of information in accordance with this policy.
            </p>
        </div>

        <section className={styles.section}>
            <h1>Data Collection</h1>
            <p>
                We only collect data necessary for the operation of Comfmunity. This includes:
            </p>
            <ol>
                <li>User Data: Basic user data ( IDs, usernames, etc. )</li>
                <li>Message Content sent within the inter-server channels. ( The bot will never store messages sent outside these channels. ).</li>
            </ol>
        </section>

        <section className={styles.section}>
            <h1>Use of Data</h1>
            <p>The collected data is used to:</p>
            <ol>
                <li>Provide Service: Facilitate inter-server communication and functionality.</li>
                <li>Enhance Experience: Improve the bot&apos;s performance and user experience.</li>
                <li>Logging: Maintain logs of messages sent into the inter-server channel for moderation purposes.</li>
            </ol>
        </section>

        <section className={styles.section}>
            <h1>Data Sharing</h1>
            <p>
                Comfmunity does not share user data with any third parties. All data remains within the operational scope of the bot.
            </p>
        </section>

        <section className={styles.section}>
            <h1>Data Retention</h1>
            <p>
                We do not retain data with potentially sensitive content ( message content ) for longer than necessary and delete it within 30 days of storage.
                <br />
                If you accidentally shared personal information or other data that you want removed, please contact us through the <a href="https://discord.gg/noelle" target="_blank" rel="noopener noreferrer">Noelle Mains Armoured-Goddess</a> discord server.
            </p>
        </section>

        <section className={styles.section}>
            <h1>User Rights</h1>
            <p> Under applicable data protection laws, you have the following rights regarding your personal data:</p>
            <ul>
                <li>Right to Access: You can request access to the personal data we hold about you.</li>
                <li>Right to Rectification: You can request corrections to any inaccurate or incomplete personal data.</li>
                <li>Right to Erasure: You may request the deletion of your personal data under certain conditions.</li>
                <li>Right to Restrict Processing: You can request that we limit the processing of your personal data in specific circumstances.</li>
                <li>Right to Data Portability: You may request a copy of your personal data in a structured, commonly used format to transfer to another service.</li>
                <li>Right to Object: You can object to the processing of your personal data for specific purposes, including direct marketing.</li>
            </ul>
        </section>

        <section className={styles.section}>
            <h1>Security Measures</h1>
            <p>
                We implement standard precautions to safeguard user data. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
        </section>

        <section className={styles.section}>
            <h1>Changes to This Privacy Policy</h1>
            <p>
                We reserve the right to update this Privacy Policy at any time. Changes will be communicated through an announcement within the Noelle Mains Armoured-Goddess Discord server. Continued use of Comfmunity following such changes constitutes acceptance of the revised policy.
            </p>
        </section>

        <section className={styles.section}>
            <h1>Contact Information</h1>
            <p>
                For questions or concerns about this Privacy Policy, please reach out to us through the <a href="https://discord.gg/noelle" target="_blank" rel="noopener noreferrer">Noelle Mains Armoured-Goddess</a> discord server.
            </p>
        </section>
    </div >
}
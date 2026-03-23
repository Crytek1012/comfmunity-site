'use client';
import styles from '../page.module.css';
import BanshareFormComponent from '@/components/banshare/banshare-form';

export default function BansharePage() {
    return (
        <div className={styles.pageWrapper}>
            <BanshareFormComponent />

            <div className={styles.infoWrapper}>
                <section className={styles.section}>
                    <h1>What is a banshare?</h1>
                    <p>
                        A banshare is a global ban issued for one or more users who have been deemed and confirmed as potentially dangerous to communities.
                    </p>
                </section>

                <section className={styles.section}>
                    <h1>What is the &quot;Banshare System&quot;?</h1>
                    <p>
                        The Banshare System refers to all functionalities that our bot, Comfmunity, provides in relation to banshares.
                    </p>
                </section>

                <section className={styles.section}>
                    <h1>How can I receive banshares?</h1>
                    <p>
                        In order to receive banshares, your server needs to be connected to the Comfmunity Network and subscribed to the Banshare System.
                        To subscribe, designate a channel and enable it with the following commands:
                    </p>

                    <ul>
                        <li>!comf banshare channel [ #channel ]</li>
                        <li>!comf banshare enable</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h1>A banshare has been wrongfully emitted. What can I do?</h1>
                    <p>
                        If evidence contrary to that in the banshare is provided, a &quot;refutation request&quot; can be made by rejecting the banshare and using the newly appeared &quot;Refute&quot; button.
                        <br />
                        Based on a refutation request, or on our own initiative, we may retract certain banshares.
                        <br />
                        When a banshare is retracted, a notice is sent explaining why this happened, and the functionalities for that banshare are disabled.</p>
                </section>
            </div>
        </div>
    );
}

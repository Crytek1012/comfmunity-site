import styles from './banshare.module.css'
import { IRawBanshare } from '@/types/database';

type Props = { banshare: IRawBanshare };

export default function BanshareDisplayComponent({ banshare }: Props) {

    function getStatusClass(status: string) {
        switch (status) {
            case 'accepted': return styles.green;
            case 'rejected': return styles.red;
            case 'pending': return styles.yellow;
            default: return '';
        }
    }

    function capitalize(string: string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    const renderWithLinks = (text: string) => {
        const parts = text.split(/(https?:\/\/[^\s]+)/g);
        return (
            <>
                {parts.map((part, i) =>
                    part.match(/^https?:\/\//) ? (
                        <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
                    ) : (
                        part
                    )
                )}
            </>
        );
    };


    return <div className={styles.banshare}>

        <div>
            <div className={styles.id}>
                Banshare ({banshare.id})
            </div>

            <div className={styles.status}><p className={getStatusClass(banshare.status)}>{capitalize(banshare.status)}</p></div>
        </div>

        <div className={styles.banshareInfoWrapper}>
            <section>
                <h3 >Author:</h3>
                <p>{banshare.authorUsername}</p>
            </section>

            <section>
                <h3 >Guild:</h3>
                <p>{banshare.guildName} ({banshare.guildId})</p>
            </section>

            <section>
                <h3 >IDs:</h3>
                <p>{banshare.targets.join(' ')}</p>
            </section>

            <section>
                <h3 >Usernames:</h3>
                <p>{banshare.users.join(' ')}</p>
            </section>

            <section>
                <h3 >Reason:</h3>
                <p>{banshare.reason}</p>
            </section>

            <section>
                <h3 >Evidence:</h3>
                <p >{renderWithLinks(banshare.proof)}</p>
            </section>
        </div>

    </div>
}
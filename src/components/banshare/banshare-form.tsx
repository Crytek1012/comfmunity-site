import { useEffect, useState } from "react";
import styles from './banshare-form.module.css';
import { useParams } from "next/navigation";
import BanshareComponent from "./banshare";

export default function BanshareFormComponent() {
    const params = useParams();
    const queryId = Array.isArray(params?.id) ? params.id[0] : params?.id || '';

    const [id, setId] = useState(queryId);
    const [banshare, setBanshare] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        async function fetch() {
            if (queryId) await fetchBanshare(queryId);
        }
        fetch();
    });

    function validateId(id: string): string | null {
        if (!/^\d+$/.test(id)) return 'A banshare ID cannot contain letters or symbols.';
        if (id.length < 17 || id.length > 20) return 'A banshare ID has a minimum of 17 and maximum of 20 digits.';
        return null;
    }

    async function fetchBanshare(searchId: string) {
        const validationError = validateId(searchId);
        if (validationError) {
            setBanshare(null);
            setLoading(false);
            setErrorMsg(validationError);
            return;
        }

        setLoading(true);
        setErrorMsg('');

        const res = await fetch('/api/banshare', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: searchId }),
        });

        const data = await res.json();
        if (!data.data) {
            setErrorMsg('No banshare found for this ID.');
            setBanshare(null);
        } else {
            setBanshare(data.data);
        }
        setLoading(false);
    }

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
        await fetchBanshare(id);
    }

    const isError = submitted && !loading && !banshare;

    return (
        <div className={styles.formWrapper}>
            <h1>Search for a banshare</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <input
                    value={id}
                    onChange={e => {
                        setId(e.target.value);
                        setSubmitted(false);
                    }}
                    placeholder="Enter ID"
                    className={isError ? styles.inputError : ''}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>{errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}

            </form>
            {banshare && <BanshareComponent banshare={banshare} />}
        </div>
    );
}

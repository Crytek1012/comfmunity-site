export default function NotFound() {
    return (
        <main style={{
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 20
        }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, we couldn’t find that page.</p>
        </main>
    );
}

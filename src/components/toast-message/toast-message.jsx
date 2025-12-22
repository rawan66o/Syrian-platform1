function MessageModal({ open, message }) {
    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: `translateX(-50%) ${open ? 'translateY(0)' : 'translateY(-100px)'}`,
            background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '10px',
            boxShadow: '0 5px 20px rgba(76, 175, 80, 0.3)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            transition: 'transform 0.4s ease',
            minWidth: '300px'
        }}>
            <div style={{
                background: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4CAF50',
                fontSize: '18px',
                fontWeight: 'bold'
            }}>
                ✓
            </div>
            <div>
                <strong>{message}</strong>
                <p style={{ margin: '5px 0 0', fontSize: '14px', opacity: 0.9 }}>
                    يمكنك الآن تسجيل الدخول
                </p>
            </div>
        </div>
    );
}

export default MessageModal;
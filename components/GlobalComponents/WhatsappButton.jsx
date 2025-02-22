import Link from 'next/link';
import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '905520752694';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <Link href={whatsappLink} passHref target="_blank" rel="noopener noreferrer" style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            display: 'inline-block',
            width: '60px',
            height: '60px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="55px"
                height="55px"
            >
                <path
                    fill="#fff"
                    d="M16 0C7.164 0 0 7.164 0 16c0 2.934.798 5.674 2.188 8.055L0 32l7.945-2.188C10.326 31.202 13.066 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.602c-2.665 0-5.17-.781-7.295-2.121l-.515-.327-4.732 1.301 1.301-4.732-.327-.515C3.179 21.17 2.398 18.665 2.398 16 2.398 8.798 8.798 2.398 16 2.398 23.202 2.398 29.602 8.798 29.602 16 29.602 23.202 23.202 29.602 16 29.602z"
                />
                <path
                    fill="#fff"
                    d="M23.168 18.965c-.383-.191-2.267-1.119-2.617-1.243-.35-.131-.601-.191-.851.191-.251.383-.98 1.242-1.202 1.492-.221.251-.438.279-.821.096-.383-.191-1.617-.596-3.084-1.902-1.139-1.02-1.902-2.279-2.124-2.662-.221-.383-.024-.589.166-.78.166-.166.383-.437.573-.656.191-.221.251-.383.383-.634.131-.251.064-.477-.031-.68-.096-.191-.851-2.056-1.167-2.828-.307-.762-.615-.659-.851-.659-.224 0-.479-.031-.733-.031s-.68.096-.98.477c-.301.383-1.29 1.26-1.29 3.066 0 1.805 1.324 3.553 1.507 3.805.191.251 2.59 3.965 6.272 5.564.877.379 1.561.605 2.096.774.879.28 1.679.24 2.311.145.705-.106 2.176-.891 2.484-1.747.307-.855.307-1.588.215-1.747-.092-.159-.346-.256-.571-.383z"
                />
            </svg>
        </Link>
    );
};

export default WhatsAppButton;

import React from 'react';

export const Logo = () => {
    return (
        <div className="logo-container">
            <svg width="100%" height="100%" viewBox="0 0 250 80" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#AA367C" />
                        <stop offset="100%" stopColor="#4A2FBD" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Geometric Abstract Shape */}
                <path
                    d="M20 10 L50 10 L65 40 L50 70 L20 70 L35 40 Z"
                    fill="url(#logoGradient)"
                    filter="url(#glow)"
                />
                <path
                    d="M40 25 L55 25 L65 40 L55 55 L40 55 L50 40 Z"
                    fill="#fff"
                    opacity="0.8"
                />

                {/* Text */}
                <text
                    x="80"
                    y="52"
                    fontFamily="Centra, sans-serif"
                    fontSize="38"
                    fontWeight="700"
                    fill="#fff"
                    style={{ letterSpacing: '2px' }}
                >
                    KAVIN
                </text>

                {/* Subtitle/Accen line */}
                <rect x="80" y="62" width="130" height="3" fill="url(#logoGradient)" rx="1.5" />
            </svg>
        </div>
    );
};

import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState({});

    const updateTime = () => {
        const now = new Date();
        setTime({
            IST: now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            UTC: now.toUTCString(),
            PST: now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
            EST: now.toLocaleString('en-US', { timeZone: 'America/New_York' }),
        });
    };

    useEffect(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>IST</h2>
                <p>{time.IST}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2>UTC</h2>
                <p>{time.UTC}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2>PST</h2>
                <p>{time.PST}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2>EST</h2>
                <p>{time.EST}</p>
            </div>
        </div>
    );
};

export default DigitalClock;
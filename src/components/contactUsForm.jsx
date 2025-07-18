import React, { useState } from 'react'

import './contactUsForm.css'

// import { config } from '../../Constants'

export default function ContactUsForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({
        name: "",
        phoneNumber: "",
        address: "",
        memo: "",
    });

    const handleStateChange = (event) => {
        const { name, value } = event.target;
        setMessage({
            ...message,
            [name]: value
        });
    }

    const sendMessage = (event) => {
        event.preventDefault();
        setIsLoading(true);

        fetch(`https://enqueue-message-task-r2nu66eilq-uc.a.run.app`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message)
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to enqueue task");
                }
                setMessage({
                    name: "",
                    phoneNumber: "",
                    address: "",
                    memo: "",
                });
            })
            .catch((err) => {
                alert("Something went wrong sending your message.");
                console.error("Send failed:", err);
            })
            .finally(() => {
                alert("Your message was delivered, thank you!")
                setIsLoading(false);
            });
    }


    return (
        <div className='ContactUsForm'>
            <form onSubmit={sendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '1rem' }}>
                    <input required
                        style={{ padding: '2rem', width: '100%' }}
                        className='ContactUsInput'
                        value={message.name}
                        onChange={handleStateChange}
                        name="name"
                        placeholder="Name"
                    />
                    <input required
                        style={{ padding: '2rem', width: '100%' }}
                        className='ContactUsInput'
                        value={message.phoneNumber}
                        onChange={handleStateChange}
                        name="phoneNumber"
                        placeholder={"Phone Number"}
                    />
                </div>
                <input required
                    className='ContactUsInput'
                    value={message.address}
                    onChange={handleStateChange}
                    name='address'
                    placeholder={'Workplace Address'}
                />
                <textarea required
                    style={{
                        resize: 'none',
                        padding: '2rem 2rem 6rem 2rem',
                    }}
                    className='ContactUsInput'
                    value={message.memo}
                    onChange={handleStateChange}
                    name='memo'
                    placeholder='Ask us anything or give us a brief description of your project 🏠🏬'
                    maxLength="4000"
                />
                <button type='submit' style={{ height: '80px', fontSize: '15px' }} className='ContactUsSendButton' disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
}
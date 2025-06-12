import React, { useState } from 'react'

import './contactUsForm.css'

// import { config } from '../../Constants'

export default function ContactUsForm() {
    const [activeButton, setActiveButton] = useState('text');
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState({
        name: "",
        contactInfo: "",
        message: "",
    });

    const handleStateChange = (event) => {
        const { name, value } = event.target;
        setText({
            ...text,
            [name]: value
        });
    }

    // const sendMail = () => {
    //     fetch(`${config.url.BACKEND_URL}/api/send-mail`, {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(text)
    //     })
    //         .then(() => {
    //             setText({
    //                 name: "",
    //                 contactInfo: "",
    //                 message: "",
    //             })
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         });
    // }

    // const sendText = () => {
    //     fetch(`${config.url.BACKEND_URL}/api/send-text`, {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(text)
    //     })
    //         .then(() => {
    //             setText({
    //                 name: "",
    //                 contactInfo: "",
    //                 message: "",
    //             })
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         });
    // }

    // const handleEmailClick = async () => {
    //     if (text.name === "" || text.message === "" || text.contactInfo === "") {
    //         return
    //     }
    //     setIsLoading(true);
    //     if (activeButton === "text") {
    //         sendText();
    //     } else {
    //         sendMail();
    //     }
    // }

    return (
        <div className='ContactUsForm'>
            {
                // uncomment if you
            /* <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '1rem', justifyContent: 'left' }}>
                <h2>Communication Preference:</h2>
                <div>
                    <button className='contactUsPreferenceButton' onClick={() => setActiveButton('text')} style={{ backgroundColor: activeButton === "text" ? "lightgrey" : "black", border: '1px white solid' }}>
                        Text
                    </button>
                    <button className='contactUsPreferenceButton' onClick={() => setActiveButton('email')} style={{ backgroundColor: activeButton === "email" ? "lightgrey" : "black", border: '1px white solid' }}>
                        Email
                    </button>
                </div>
            </div> */}
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '1rem'}}>
                    <input required
                        style={{padding: '2rem', width: '100%'}}
                        className='ContactUsInput'
                        value={text.name}
                        onChange={handleStateChange}
                        name="name"
                        placeholder="Name"
                    />
                    <input required
                        style={{padding: '2rem', width: '100%'}}
                        className='ContactUsInput'
                        value={text.contactInfo}
                        onChange={handleStateChange}
                        name="contactInfo"
                        placeholder={activeButton === "text" ? "Mobile Number" : "E-mail"}
                    />
                </div>
                <input required
                    className='ContactUsInput'
                    placeholder='Workplace Address'
                    />
                <textarea required
                    style={{
                        resize: 'none',
                        padding: '2rem 2rem 3rem 2rem',
                    }}
                    className='ContactUsInput'
                    value={text.message}
                    onChange={handleStateChange}
                    name='message'
                    placeholder='Ask us anything or give us a brief description of your project 🏠🏬'
                    maxLength="4000"
                />
                <button style={{ height: '80px', fontSize: '15px', border: 'none' }} className='ContactUsSendButton' disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
}
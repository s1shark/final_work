import './contact.css'
import Header from '../header'
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        massage: 'hi test'
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitted', formData);
        setIsSubmitted(true);
    };

    return (
        <div className='div-form'>
            <Header />
            <h1>Контакти</h1>
            <form onSubmit={handleSubmit} >
                <label>Name *</label><br/>
                <input type="text" name='name' value={formData.name} onChange={handleChange} required /><br/>
                <label>Email *</label><br/>
                <input type="email" name='email' value={formData.email} onChange={handleChange} required /><br/>
                <label>Message</label><br/>
                <textarea name="message" value={formData.massage} onChange={handleChange} ></textarea><br/>

                <button type='submit' className='contact-button'>Відправити</button>
            </form>
        </div>
    );
};

export default Contact;

import './contact.css'
import Header from '../header'

const Contact = () => {
    return (
        <>
            <Header />
            <h1>Контакти</h1>
            <div className='div-form'>
                <form action="#" id='form'>
                    <label>Name*</label><br/>
                    <input type="text" value="Your name..." /><br/>
                    <label>Email Address *</label><br/>
                    <input type="text" value="Your email address..." /><br/>
                    <label>Message*</label><br/>
                    <textarea name="" id="" cols="30" rows="10" value="Your message..."></textarea><br/>

                    <button className='form-button'>Відправити</button>
                </form>
            </div>   
        </> 
    );
};

export default Contact;

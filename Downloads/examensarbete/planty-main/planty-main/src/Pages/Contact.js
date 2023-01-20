import React from 'react';
import contact from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/Contact.png"


function Contact() {
  return (
    <div>

<p className='title-contact'>
  We are here for you!
  </p>


    <div className='contact-container'>
    <p className='contact-content'>
  Your contact information is used to contact you, and can include information such as your name, phone number and email. 
It could also include your professional profile, if you have one and if necessary or relevant for the jobs you're applying for.
During the hiring process, employers use the contact info listed on your resume to provide 
updates about your job application, including getting in touch to schedule initial interviews and filling out paperwork regarding your pending employment.
 </p>    
 </div>

 <div className='contact-img'>
<img src={contact} alt="" />
</div>


   </div>
  )
}

export default Contact
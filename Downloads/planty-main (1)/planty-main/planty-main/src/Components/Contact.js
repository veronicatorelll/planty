import React from 'react';
// import img2 from "/Users/intern.pc1/typescript-demo/my-app/src/assets/img2.jpg"


function Contact() {
  return (
    <div>

      
    <div className='contact'>
        <h3 className='title-contact'>Contact</h3>
Your contact information is used to contact you, and can include information such as your name, phone number and email. 
It could also include your professional profile, if you have one and if necessary or relevant for the jobs you're applying for.

During the hiring process, employers use the contact info listed on your resume to provide 
updates about your job application, including getting in touch to schedule initial interviews and filling out paperwork regarding your pending employment.
        
        
        <div className='img2'>  
        {/* <img src={img2} alt="logo"/> */}
        </div>
        </div>

        <div className='customer-service'>
        <h4>Get in touch with us!</h4>
        <p>Mail: hello@planty.se </p>
        <p>Phone: +46 673 192 733 </p>
        <p>Address: Plantans Väg 1, 168 44, Stockholm </p>
        </div>


   </div>
      
  )
}

export default Contact
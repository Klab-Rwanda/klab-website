import React from 'react'
import Map from '../assets/map3.png'

const LeftContact = () => {
  return (
    <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 h-[450px] sm:w-full ">
      {/* <img src={Map} alt="Map" className="w-full rounded-3xl" /> */}
      <iframe
        className="w-full h-full rounded-3xl "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7975.066081096601!2d30.07195417770996!3d-1.9393289999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca783685d0137%3A0x9249d63eb7dba70b!2skLab%20Rwanda!5e0!3m2!1sen!2srw!4v1683410191199!5m2!1sen!2srw"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default LeftContact
import React from 'react'
import { useState } from 'react';
import '../css/index.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };



  return (
    <div className='h-[95vh] min-w-full mt-20 flex flex-col items-start justify-between lg:pr-20 lg:pl-20 pr-0 pl-0'>

      <p className='mt-8 text-3xl lg:text-6xl font-montserrat font-bold text-texte_secondary md:text-4xl sm:text-2xl'>Hire me for your projects</p>
      <p className='mb-12 text-xs lg:text-xl font-montserrat'>Designers, UI, Comms companies and everyone ! Elevate your work with stunning 4K 3D renders - Ready to use and customizable</p>
      <form onSubmit={handleSubmit} className='h-2/3 w-full flex flex-col items-start justify-between gap-3 mb-20'>

        <div className='w-full flex flex-col lg:flex-row justify-between gap-4 pr-4 pl-4'>
          <div className="w-full lg:w-1/2 flex flex-col ">
            <label htmlFor="name" className="text-md font-ubuntu text-texte_secondary">Name / Organsation</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b border-gray-400  rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:border-texte_secondary focus:outline-none focus:shadow-none"
              placeholder=""
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <label htmlFor="name" className="flex flex-row text-md font-ubuntu text-texte_secondary">Profession / Domain</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b border-gray-400 rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:border-texte_secondary focus:outline-none focus:shadow-none"
              placeholder=""
            />
          </div>

        </div>

        <div className="w-full flex flex-col pr-4 pl-4">
          <label htmlFor="name" className="block text-md font-ubuntu text-texte_secondary">Your Email</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-b border-gray-400 rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:border-texte_secondary focus:outline-none focus:shadow-none"
            placeholder=""
          />
        </div>

        <div className="w-full flex flex-col pr-4 pl-4">
          <label htmlFor="name" className="block text-md font-ubuntu text-texte_secondary">Message</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-b border-gray-400 rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:border-texte_secondary focus:outline-none focus:shadow-none"
            placeholder=""
          />
        </div>

        <div className="mr-10 w-full flex flex-row justify-end ">
          <button className="m-4 bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg hover:bg-texte_secondary hover:text-background_primary transition-colors duration-400 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-[7px_19px_20px_6px_#595959]">
            Send
          </button>
        </div>

      </form>

    </div>
    
  )
}

export default Contact
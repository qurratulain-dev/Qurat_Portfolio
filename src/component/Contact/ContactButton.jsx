import React from 'react'

const ContactButton = () => {
  return (
    <button
  type="submit"
  className="relative overflow-hidden border-2 border-emerald-500 text-white px-6 py-3 rounded-lg
             font-medium transition-all duration-500 group flex items-center gap-2 mx-auto"
>
  <span className="relative z-10">Send Message →</span>

  <span
    className="absolute top-0 left-0 w-full h-full bg-emerald-500 origin-bottom-left 
               -rotate-90 group-hover:rotate-0 transition-transform duration-500
               ease-in-out z-0"
  ></span>
</button>
  )
}

export default ContactButton

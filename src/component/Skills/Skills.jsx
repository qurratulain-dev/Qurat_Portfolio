import React from 'react'
import FrontEnd from './FronEnd'
import BackEnd from './BackEnd'

const Skills = () => {
  return (
    <section id='skills'>
      <div  className="max-w-6xl mx-auto px-10 py-16">
        <h2 className="text-4xl font-bold text-emerald-500 text-center">
           Skills
        </h2>

        <p className="capitalize text-center my-3 text-gray-500">
          Here's an overview of my technical expertise and proficiency level
        </p>

        <div >
          <FrontEnd />
          <BackEnd />
        </div>
      </div>
    </section>
  )
}

export default Skills

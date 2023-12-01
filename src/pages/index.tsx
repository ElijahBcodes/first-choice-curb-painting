// import Navbar  from '@/components/navbar'
// import React from 'react'


export default function Home() {
  return (

    <>
        {/* < Navbar /> */}
    <div className="flex flex-row">
    <div className="hero " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1602740027538-35973ec88b9e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFpbnQlMjByb2xsZXJ8ZW58MHx8MHx8fDA%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">First Choice Curb Painting</h1>
      
      
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1601150169741-298168d2831c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cmJ8ZW58MHx8MHx8fDA%3D"  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Why Paint Address on Curb?</h2>
    <p>Enhance safety, elevate aesthetics, and make your home easily identifiable with our expertly crafted curb paintings. Unveil the charm of your address with our bespoke designs and personalized service. Illuminate your curb with our professional touch!"
</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

</div>

    </>
  )
}

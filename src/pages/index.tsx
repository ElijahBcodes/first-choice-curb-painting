import Head from 'next/head'

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
    <div className="hero " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1602740027538-35973ec88b9e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFpbnQlMjByb2xsZXJ8ZW58MHx8MHx8fDA%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">First Choice Curb Painting</h1>
      
      
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image src="https://images.unsplash.com/photo-1495996278086-d589e29619ea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3ByYXklMjBwYWludHxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Paint Address on Curb</h2>
    <p>Enhance safety, elevate aesthetics, and make your home easily identifiable with our expertly crafted curb paintings. Unveil the charm of your address with our bespoke designs and personalized service. Illuminate your curb with our professional touch!"
</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<h1>Why Curb Painting</h1>
</div>
    </>
  )
}

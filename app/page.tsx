"use client"
import { useState } from "react"


export default function Home() {
  const [name, setName] = useState("Begüm")
  function handleChange(event) {
    setName(event.target.value)
  
  }
  return (

    <div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleChange}></input>
      <button className="btn btn-info">{name}</button>
      <h1>{name} saat kaç</h1>
    </div>

  )
}
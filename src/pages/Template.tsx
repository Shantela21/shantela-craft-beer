import React from 'react'
import { useParams } from 'react-router-dom'

type URLParams = { firstName: string };
export default function Template() {
    
    const { firstName } = useParams<URLParams>();
    console.log(firstName)
  return (
    
    <div>
      <h1>Hi, my name is {firstName}</h1>
      
    </div>
  )
}

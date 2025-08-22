import {react} from 'react'

// Step 1: Accept `joke` and `loading` as props
/* Step 2: If `loading` is true, display "Loading..." */
/* Step 3: Otherwise, display the joke */



const JokeDisplay = ({ joke, loading }) => {
  
  return (

  <div className="joke-container">
    {loading ? (
      <p>loading...</p>
    ): (
      <p> {joke}</p>
    )
    }
      
   </div>
    
  )
}

export default JokeDisplay

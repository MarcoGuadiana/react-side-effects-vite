import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const  [cJoke, setJoke] = useState("");
  const  [isLoading, setIsLoading] = useState(true);

 

  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  

  // Step 3: Define a function that fetches a programming joke from an API
  function getJoke() {
    setIsLoading(true);
    
      fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => response.json()) 
      .then(data => {
        setIsLoading(false);
        setJoke(data.joke);
        console.log(data);
        var data2 = data;
      }) 
      .catch(error =>{
          setIsLoading(false)
          console.error("Error fetching user:", error)
        })
                  
  }
  useEffect(() => {
    getJoke()
    }, [])

      
  return (
    <div className="app">
      <h1> Jokes</h1>
     
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={cJoke} loading = {isLoading} />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton getJoke = {getJoke} />
    </div>
  )
}

export default App

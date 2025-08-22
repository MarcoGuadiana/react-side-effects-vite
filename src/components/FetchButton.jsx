// Step 1: Accept `fetchJoke` as a prop

function FetchButton ({ getJoke })  {
  return (
    // Step 2: Add an onClick event that calls `fetchJoke`

    <button onClick = {getJoke} >Get a New Joke</button>
  )
}

export default FetchButton

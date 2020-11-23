import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  console.log(props) 
  return (
      <tr>
         <td>{props.text}</td> 
         <td>{props.value}</td>        
      </tr>    
  )
}

const Statistics = (props) => {
  console.log(props)

  if ((props.good === 0) && (props.neutral === 0) && (props.bad === 0)) 
  {
    return (
      <div>
      No feedback given
      </div>
      )
  }

  return (
<table>
  <tbody>
   <StatisticsLine  text="good" value={props.good}  /> 
   <StatisticsLine text="neutral" value={props.neutral} />
   <StatisticsLine text="bad" value={props.bad} />
   <StatisticsLine text="all" value={props.good + props.bad + props.neutral} />
   <StatisticsLine text="average" value={(props.good - props.bad)/(props.good + props.bad + props.neutral)} />
   <StatisticsLine text="positive" value={props.good / (props.good + props.bad + props.neutral) * 100 + " %"} />
   </tbody>
  </table>
)
}


const App = (props) => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  const setToGood = (newGood)  => {
    setGood(newGood)
  }
  const setToNeutral = (newNeutral)  => {
    setNeutral(newNeutral)
  }
  const setToBad = (newBad)  => {
    setBad(newBad)
  }

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      <h1>
        statistics
      </h1>     
      <Statistics good ={good} neutral ={neutral} bad ={bad}/> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

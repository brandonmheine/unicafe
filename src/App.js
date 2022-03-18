import { useState } from 'react'

const Button = ({ onClick, text }) => (
	<button onClick={onClick}>
		{text}
	</button>
)

const StatisticsLine = ({text, value}) => {
  return <p>{text}: {value}</p>
}


const Statistics = ({good, bad, neutral}) => {
  if (good === 0 && bad === 0 && neutral === 0) {
		return <h2>No feedback given</h2>;
	}
  const all = good + bad + neutral
  const average = ((good - bad) / all).toFixed(5)
  const positive = `${(good / all * 100).toFixed(2)}%`
  return (
  <div>
    <h2>Statistics</h2>
    <StatisticsLine text='Good' value={good} />
    <StatisticsLine text='Neutral' value={neutral} />
    <StatisticsLine text='Bad' value={bad} />
    <StatisticsLine text='All' value={all} />
    <StatisticsLine text='Average' value={average} />
    <StatisticsLine text='Positive' value={positive} />
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const moreGood = () => setGood(good + 1)
  const moreNeutral = () => setNeutral(neutral + 1)
  const moreBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='Good' onClick={moreGood} />
      <Button text='Neutral' onClick={moreNeutral} />
      <Button text='Bad' onClick={moreBad} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
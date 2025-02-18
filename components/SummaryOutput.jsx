import React from 'react'

const SummaryOutput = ({text, summarizeText, summary}) => {
  return (
    <div>
      {summary && <p>Summary: {summary}</p>}
      {text.length > 150 && <button onClick={summarizeText}>Summarize</button>}
    </div>
  )
}

export default SummaryOutput
import React from 'react';
import PastReading from './PastReading.jsx';

function PastReadingPanel(props) {
  const { pastReadings } = props;
  console.log(pastReadings);
  const pastReadingsComponents = [];
  for (let el of pastReadings) {
    pastReadingsComponents.push(<PastReading reading={el}></PastReading>);
  }
  return <div className='past-reading-panel'>{pastReadingsComponents}</div>;
}

export default PastReadingPanel;

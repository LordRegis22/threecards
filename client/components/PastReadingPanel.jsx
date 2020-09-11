import React from 'react';
import PastReading from './PastReading.jsx';

function PastReadingPanel(props) {
  const { pastReadings, loggedinUser, setLoggedinUser } = props;

  const pastReadingsComponents = [];
  for (let el of pastReadings) {
    pastReadingsComponents.push(
      <PastReading
        reading={el}
        loggedinUser={loggedinUser}
        setLoggedinUser={setLoggedinUser}
      ></PastReading>
    );
  }
  return (
    <>
      <h2>Past Readings</h2>
      <div className='past-reading-panel'>{pastReadingsComponents}</div>
    </>
  );
}

export default PastReadingPanel;

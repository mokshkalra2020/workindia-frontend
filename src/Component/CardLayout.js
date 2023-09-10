import React, { useState, useEffect } from 'react';
import './CardLayout.css'
import Card from '../card';


function CardLayout() {
    const [data, setData] = useState({ applied: [], accepted: [], rejected: [] });

  useEffect(() => {
    fetch('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d')
      .then((response) => response.json())
      .then((responseData) => {
        const categorizedData = {
          applied: [],
          accepted: [],
          rejected: [],
        };

        responseData.data.forEach((candidate) => {
          const { status } = candidate;
          categorizedData[status.toLowerCase()].push(candidate);
        });

        setData(categorizedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='App'>
        <div className="columns">
        <div className="column">
          <h2>Applied</h2>
          {data.applied.map((candidate) => (
            <Card
              key={candidate.id}
              title={candidate.name}
              subheadings={[
                `${candidate.last_updated_at}`,
                `${candidate.location}`,
                `${candidate.gender}`,
              ]}
            />
          ))}
        </div>
        <div className="column">
          <h2>Accepted</h2>
          {data.accepted.map((candidate) => (
            <Card
              key={candidate.id}
              title={candidate.name}
              subheadings={[
                `${candidate.last_updated_at}`,
                `${candidate.location}`,
                `${candidate.gender}`,
              ]}
            />
          ))}
        </div>
        <div className="column">
          <h2>Rejected</h2>
          {data.rejected.map((candidate) => (
            <Card
              key={candidate.id}
              title={candidate.name}
              subheadings={[
                `${candidate.last_updated_at}`,
                `${candidate.location}`,
                `${candidate.gender}`,
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardLayout
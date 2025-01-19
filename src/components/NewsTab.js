import React, { useState } from 'react';
import NewsList from './NewsList';

const topics = ['Technology', 'Health', 'Sports', 'Business'];

function NewsTabs() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            style={{
              marginRight: '8px',
              padding: '8px 16px',
              backgroundColor: selectedTopic === topic ? '#007BFF' : '#f0f0f0',
              color: selectedTopic === topic ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {topic}
          </button>
        ))}
      </div>
      <NewsList topic={selectedTopic} />
    </div>
  );
}

export default NewsTabs;

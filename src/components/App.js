import React from 'react';
import Tooltip from './Tooltip';
import './Tooltip.css'; // Optional styling

function App() {
  return (
    <div style={{ padding: '50px' }}>
      <Tooltip text="This is a tooltip">
        <button>Hover over me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is another tooltip">
        <p>This is a paragraph with a tooltip.</p>
      </Tooltip>

      <br /><br />

      
    </div>
  );
}

export default App;

import React from 'react';
import DataContext from './utils/DataContext';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <DataContext>
        <Card />
      </DataContext>
    </div>
  );
};

export default App;
import React from 'react';
import ProjectsPage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className='container'>
      <ProjectsPage />
    </div>
  );
}

// App.test.tsx 에서 component를 테스트할때 사용 (컴포넌트 동작 검증)
export default App;

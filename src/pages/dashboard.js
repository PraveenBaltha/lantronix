import React from 'react';
import UserGrid from '../Components/UserGrid';
const Dashboard = () => {
  return (
    <div style={{ textAlign: 'center' }}>
        <div style={{width:"100%", float:"right"}}>
            <UserGrid/>
        </div>
    </div>
  );
};

export default Dashboard;

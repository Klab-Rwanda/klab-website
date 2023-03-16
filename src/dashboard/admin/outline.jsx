import DashboardHeader from '../header'
import DashboardSidebar from '../sideBar'
import { useState } from 'react';

const Outline = () => {
  const [sidebar, setSidebar] = useState(true);
  

  return (
    <div>
      <DashboardSidebar sidebar={sidebar} setSidebar={setSidebar} />
      <DashboardHeader sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
}

export default Outline
import React, { useState } from 'react';
import highridge from '../assets/highridge.jpg';

function TabbedAccordion() {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    if (activeTab === index) {
      setActiveTab(-1);
    } else {
      setActiveTab(index);
    }
  };

  const tabData = [
    {
      title: '50 Highridge',
      content: 'Timings: Mon- Fri highridge',
      imageUrl: highridge,
    },
    {
      title: 'Stafford',
      content: 'Timings: Mon- Fri stafford',
      imageUrl: highridge,
    },
    {
      title: 'Franklin',
      content: 'Timings: Mon- Fri franklin',
      imageUrl: highridge,
    },
  ];

  return (
    <div className='tabbed-accordion'>
      <ul className='tabs'>
        {tabData.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => toggleTab(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className='content'>
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab-content ${activeTab === index ? 'active' : ''}`}
          >
            <img src={tab.imageUrl} alt={tab.title} />
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabbedAccordion;

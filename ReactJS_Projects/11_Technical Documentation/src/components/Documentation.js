import React, { useState } from 'react';


const Documentation = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const topics = [
    {
      name: 'Portrait Photography',
      description:
        'One of the most common photography styles, portrait photography, or portraiture, aims to capture the personality and mood of an individual or group. Images may be candid or posed, full body or close-ups. Either way, the subject’s face and eyes are typically in focus. Lighting and backdrop help to convey tone and emotion. Popular types of photography portraits include senior portraits, family portraits, engagement photos, and professional headshots. The best portrait photographers make clients feel completely comfortable, so that their expressions are natural and relaxed.',
    },
    {
      name: 'Photojournalism',
      description:
        'Photojournalism is a way of telling the story of a newsworthy (perhaps even historic) event or scene through photographs. Photojournalism should be as objective and truthful as possible and capturing candid moments as they happen is more important than getting picture-perfect shots. Generally, photojournalists attend planned events with the hope of capturing unplanned, unscripted moments. Their work is routinely published in magazines and newspapers.',
    },
    {
      name: 'Fashion Photography',
      description:
        'Fashion photography showcases and glamorizes fashion clothing, shoes, and accessories to make them more desirable to consumers. It is commonly published in magazines and online. People may choose this niche over different types of photography because of the opportunity to be highly creative in making photographs eye-catching and appealing. Fashion photographers take a lot of full body shots and work in an array of locations, from fashion shows to studios with full lighting setups to city streets and open fields. They utilize many of the same skills as portrait photographers and must practice good teamwork and communication when working with shoot stylists, creative directors, and models.',
    },
    {
      name: 'Sports Photography',
      description:
        'By catching athletes, coaches, and even fans at the perfect moment, sports photographs can depict the passion, drama, and emotion that fuels sporting events. Sports photographers must aim and shoot quickly to keep up with the action around them, and it’s best practice to use a higher ISO to shoot at a faster shutter speed. Sports photographers also usually use long, heavy lenses for zooming in on the action. Interesting angles can help make your work stand out in this competitive genre.',
    },
  ];

  const handleTopicClick = (name) => {
    setSelectedTopic(name);
  };

  return (
    <div className="documentation">
      <div className="topics">
        {topics.map((topic) => (
          <button
            key={topic.name}
            onClick={() => handleTopicClick(topic.name)}
            className={selectedTopic === topic.name ? 'active' : ''}
          >
            {topic.name}
          </button>
        ))}
      </div>
      <div className="description">
        {selectedTopic && (
          <>
            <h2>{selectedTopic}</h2>
            <p>
              {topics.find((topic) => topic.name === selectedTopic).description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Documentation;
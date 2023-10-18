import React from 'react';
import './progress.css';

const CircularProgressBar = ({ percentage }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (100 - percentage) * circumference / 100;

  return (
    <div className="circular-progress-bar">
      <svg>
        <circle
          className="circle-background"
          r={radius}
          cx={radius + 5}
          cy={radius + 5}
        />
        <circle
          className="circle-progress"
          r={radius}
          cx={radius + 5}
          cy={radius + 5}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset: progress }}
        />
      </svg>
      <div className="percentage">
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgressBar;

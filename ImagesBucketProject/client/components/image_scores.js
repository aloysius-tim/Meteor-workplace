import React from 'react';

const Image_scores = (props) => {
    const {ups, downs} = props;
    const upsPercent = `${100 * (ups / (ups+downs))}%`;
    const downsPercent = `${100 * (downs / (ups+downs))}%`;

    return (
      <div>
          <div className="progress">
              <div className="progress-bar progress-bar-success progress-bar-striped" style={{width: upsPercent}}></div>
              <div className="progress-bar progress-bar-danger progress-bar-striped" style={{width: downsPercent}}></div>
          </div>
      </div>
    );
};

export default Image_scores;
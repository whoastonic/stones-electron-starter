import React, { ReactElement } from 'react'

const World = (): ReactElement => (
  <div>
    <div className="world-container">
      <div className="world-title">
        END OF THE WORLD!
      </div>
      <div className="world-content">
        <iframe
          title="ZA WORLDO"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/z1OpA4qeIzI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
      <div className="back-button">
        <a href="/">Back...</a>
      </div>
    </div>
  </div>
)

export default World

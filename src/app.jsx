import React from 'react';
import styles from './scss/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <span className="mdl-layout-title">Safe Spot</span>
            {/* Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer" />
            {/* Navigation */}
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href>Map</a>
              <a className="mdl-navigation__link" href>Feed</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href>Map</a>
            <a className="mdl-navigation__link" href>Feed</a>
          </nav>
        </div>
          <main className="mdl-layout__content">
            <div className={styles.logoHeader}></div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Button
            </button>
          </main>
      </div>

    )
  }
}

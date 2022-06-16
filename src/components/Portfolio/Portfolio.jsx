import React from 'react'
import './Portfolio.css'

import runBuddyImg from '../../assets/run-buddy.png';
import bookSearchImg from '../../assets/book-search.png';
import budgetTrackerImg from '../../assets/budget-tracker.png';
import petHubImg from '../../assets/pethub.png';
import socialMediaApiImg from '../../assets/social-media-api.png';
import taskMasterImg from '../../assets/taskmaster-pro.png';
import weatherApiImg from '../../assets/weather-api.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recient Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={runBuddyImg} alt="img" />
          </div>
          <h3>Run Buddy</h3>
          <div className="portfolio__item-cta">
            <a rel="run-buddy-github" href="https://github.com/jclanc7507/run-buddy" className="btn btn-primary">GitHub</a>
            <a rel="run-buddy-demo" href="https://jclanc7507.github.io/run-buddy" className="btn">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={bookSearchImg} alt="img" />
          </div>
          <h3>Book Search</h3>
          <div className="portfolio__item-cta">
            <a rel="book-search-github" href="https://github.com/jclanc7507/book-search" className="btn btn-primary">GitHub</a>
            <a rel="book-search-demo" href="https://jclanc7507.github.io/book-search" className="btn">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={budgetTrackerImg} alt="img" />
          </div>
          <h3>Budget Tracker</h3>
          <div className="portfolio__item-cta">
            <a rel="budget-tracker-github" href="https://github.com/jclanc7507/Budget-Tracker-PWA" className="btn btn-primary">GitHub</a>
            <a rel="budget-tracker-demo" href="https://jclanc7507.github.io/Budget-Tracker-PWA" className="btn">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={petHubImg} alt="img" />
          </div>
          <h3>PetHub</h3>
          <div className="portfolio__item-cta">
            <a rel="PetHub-github" href="https://github.com/jclanc7507/PetHub" className="btn btn-primary">GitHub</a>
            <a rel="PetHub-demo" href="https://jclanc7507.github.io/PetHub" className="btn">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={socialMediaApiImg} alt="img" />
          </div>
          <h3>Social Media API</h3>
          <div className="portfolio__item-cta">
            <a rel="social-media-api-github" href="https://github.com/jclanc7507/social-media-api" className="btn btn-primary">GitHub</a>
            <a rel="social-media-api-demo" href="https://drive.google.com/file/d/156L073uuXtwzemyqsnGVmqi80pfowFMm/view" className="btn">Recorded Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={taskMasterImg} alt="img" />
          </div>
          <h3>TaskMaster</h3>
          <div className="portfolio__item-cta">
            <a rel="taskmaster-github" href="https://github.com/jclanc7507/TaskMasterPro" className="btn btn-primary">GitHub</a>
            <a rel="taskmaster-demo" href="https://jclanc7507.github.io/TaskMasterPro" className="btn">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={weatherApiImg} alt="img" />
          </div>
          <h3>Weather Web App</h3>
          <div className="portfolio__item-cta">
            <a rel="weather-api-github" href="https://github.com/jclanc7507/weather-forecast" className="btn btn-primary">GitHub</a>
            <a rel="weather-api-demo" href="https://jclanc7507.github.io/weather-forecast" className="btn">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
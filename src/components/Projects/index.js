import React from 'react'
import { Content, Name, Description, Img, List, GithubButton } from './styles'
import ExternalLink from '../ExternalLink'
import tunezapLogo from './tunezap.png'

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <Content>
      <div>
        <Name>
          <h3>react-easy-crop</h3>
          <GithubButton>
            <a
              className="github-button"
              href="https://github.com/ricardo-ch/react-easy-crop"
              data-icon="octicon-star"
              data-show-count="true"
              aria-label="Star ricardo-ch/react-easy-crop on GitHub"
            >
              Star
            </a>
          </GithubButton>
        </Name>
        <Description>
          A React component to crop images with easy interactions. I&apos;ve
          started to implement this component at work for the new listing form
          of{' '}
          <ExternalLink href="https://ricardo.ch" title="Ricardo.ch">
            Ricardo.ch
          </ExternalLink>
          .<br /> Then, I thought it was a cool project and I decided to
          continue working on it on my personal time and make it open-source in
          agreement with my employer.
        </Description>
      </div>
      <div>
        <Name>
          <h3>AngularJS Slider</h3>
          <GithubButton>
            <a
              className="github-button"
              href="https://github.com/angular-slider/angularjs-slider"
              data-icon="octicon-star"
              data-show-count="true"
              aria-label="Star angular-slider/angularjs-slider on GitHub"
            >
              Star
            </a>
          </GithubButton>
        </Name>
        <Description>
          This is the most used slider directive for AngularJS 1.X with more
          than{' '}
          <ExternalLink
            href="https://npm-stat.com/charts.html?package=angularjs-slider&from=2015-01-01"
            title="NPM Stats"
          >
            1 million downloads on NPM
          </ExternalLink>
          . <br />I did not start this project, but I am the main contributor
          since July 2015. Since then I have added many features, full test
          coverage, a documentation website and handle all issues and pull
          requests.
        </Description>
      </div>

      <div>
        <Name>
          <h3>Tunezap.com</h3>
          <ExternalLink href="http://tunezap.com" title="Tunezap">
            <Img src={tunezapLogo} alt="Tunezap.com logo" />
          </ExternalLink>
        </Name>
        <Description>
          This is a web app I built as a student to create songs playlists. The
          main features are:
          <List>
            <li>Playback using Youtube APIs</li>
            <li>Lyrics display</li>
            <li>Similar songs radio</li>
            <li>Playlist sharing</li>
          </List>
        </Description>
      </div>
      <div>
        <Name>
          <h3>valentin-hervieu.fr</h3>
          <GithubButton>
            <a
              className="github-button"
              href="https://github.com/ValentinH/valentin-hervieu"
              aria-label="Watch ValentinH/valentin-hervieu on GitHub"
            >
              Watch
            </a>
          </GithubButton>
        </Name>
        <Description>
          I use this website as a playground to try new things. At the moment,
          it is built with Gatsby, GraphQL and Emotion.
        </Description>
      </div>
    </Content>
  </div>
)

export default Projects

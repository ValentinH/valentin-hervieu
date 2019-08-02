import React from 'react'
import { Content, Name, Title, Description, Img, List } from './styles'
import ExternalLink from '../ExternalLink'
import GithubButton from '../GithubButton'
import tunezapLogo from './tunezap.png'
import tunezapLogoWebp from './tunezap.webp'

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <Content>
      <div>
        <Name>
          <Title>react-easy-crop</Title>
          <GithubButton user="ricardo-ch" repo="react-easy-crop" />
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
          <Title>AngularJS Slider</Title>
          <GithubButton user="angular-slider" repo="angularjs-slider" />
        </Name>
        <Description>
          This is the most used slider directive for AngularJS 1.X with more
          than{' '}
          <ExternalLink
            href="https://npm-stat.com/charts.html?package=angularjs-slider&from=2015-01-01"
            title="NPM Stats"
          >
            2 million downloads on NPM
          </ExternalLink>
          . <br />I did not start this project, but I am the main contributor
          since July 2015. Since then I have added many features, full test
          coverage, a documentation website and handle all issues and pull
          requests.
        </Description>
      </div>

      <div>
        <Name>
          <Title>Tunezap.com</Title>
          <ExternalLink href="http://tunezap.com" title="Tunezap">
            <picture>
              <source srcSet={tunezapLogoWebp} type="image/webp" />
              <source srcSet={tunezapLogo} type="image/png" />
              <Img src={tunezapLogo} alt="Tunezap.com logo" />
            </picture>
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
          <Title>valentin-hervieu.fr</Title>
          <GithubButton user="ValentinH" repo="valentin-hervieu" type="watch" />
        </Name>
        <Description>
          I use this website as a playground to try new things. At the moment,
          it is built with Typescript, Gatsby, GraphQL and Emotion. I have
          written an article about{' '}
          <ExternalLink
            href="https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c"
            title="How I used Google Photos to host my website pictures gallery"
          >
            how I used Google Photos to host my pictures gallery
          </ExternalLink>
          .
        </Description>
      </div>
    </Content>
  </div>
)

export default Projects

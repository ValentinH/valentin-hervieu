import React from 'react'
import { Content, Name, Title, Description, List } from './styles'
import ExternalLink from '../ExternalLink'
import GithubButton from '../GithubButton'

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
          started to implement this component at work for the listing form of{' '}
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
          <Title>Medicalist</Title>
          <ExternalLink href="https://medicalist.fr" title="Medicalist">
            medicalist.fr
          </ExternalLink>
        </Name>
        <Description>
          This is a react-native application to manage your medicines and learn
          about them. As this is using open-data from the French government, it
          is only available in French.
          <List>
            <li>Scan medicine boxes using their QR code or barcode</li>
            <li>Keep track of your stock and add personal notes</li>
            <li>Search for any medicine</li>
            <li>
              Medicine record with all needed information: usage, dosage,
              composition, price, leaflet, etc.
            </li>
          </List>
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
            3 million downloads on NPM
          </ExternalLink>
          . <br />I did not start this project, but I am the main contributor
          since July 2015. Since then I have added many features, full test
          coverage, a documentation website and handle all issues and pull
          requests.
        </Description>
      </div>

      <div>
        <Name>
          <Title>valentin-hervieu.fr</Title>
          <GithubButton user="ValentinH" repo="valentin-hervieu" type="watch" />
        </Name>
        <Description>
          I use this website as a playground to try new things. At the moment,
          it is built with Typescript, Next.js and Emotion. I have written an
          article about{' '}
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

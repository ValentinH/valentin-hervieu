import ExternalLink from '../ExternalLink';
import GithubButton from '../GithubButton';

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <div className="mb-6 grid gap-x-8 gap-y-6 lg:grid-cols-2">
      <Project
        title="react-easy-crop"
        titleAdornment={<GithubButton user="ValentinH" repo="react-easy-crop" />}
        description={
          <>
            A React component library to crop images with easy interactions. I&apos;ve started to
            implement this component at work for the listing form of{' '}
            <ExternalLink href="https://ricardo.ch" title="Ricardo.ch">
              Ricardo.ch
            </ExternalLink>
            .<br /> Then, I thought it was a nice project and I decided to continue working on it on
            my personal time and made it open-source with the agreement of my employer.
            <br />
            Today, it has been downloaded near 100 million times on NPM.
          </>
        }
      />

      <Project
        title="Medicalist"
        titleAdornment={
          <ExternalLink href="https://medicalist.fr" title="Medicalist">
            medicalist.fr
          </ExternalLink>
        }
        description={
          <>
            This is a react-native application to manage your medicines and learn about them. As
            this is using open-data from the French government, it is only available in French.
            <br />
            <ul className="my-2">
              <li>Scan medicine boxes using their QR code or barcode</li>
              <li>Keep track of your stock and add personal notes</li>
              <li>Search for any medicine</li>
              <li>
                Medicine record with all needed information: usage, dosage, composition, price,
                leaflet, etc.
              </li>
            </ul>
          </>
        }
      />

      <Project
        title="AngularJS Slider"
        titleAdornment={<GithubButton user="angular-slider" repo="angularjs-slider" />}
        description={
          <>
            This was the most used slider directive for AngularJS 1.X with more than{' '}
            <ExternalLink
              href="https://npm-stat.com/charts.html?package=angularjs-slider&from=2015-01-01"
              title="NPM Stats"
            >
              3 million downloads on NPM
            </ExternalLink>
            . <br />I did not start this project, but I was the main maintainer between 2015 and
            2022. During this time, I have added many features, full test coverage, a documentation
            website and handle all issues and pull requests.
          </>
        }
      />

      <Project
        title="valentin-hervieu.fr"
        titleAdornment={<GithubButton user="ValentinH" repo="valentin-hervieu" type="watch" />}
        description={
          <>
            I use this website as a playground to try new things. At the moment, it is built with
            Typescript, TanStack Start and Tailwind. I have written an article about{' '}
            <ExternalLink
              href="https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c"
              title="How I used Google Photos to host my pictures gallery"
            >
              how I used Google Photos to host my pictures gallery
            </ExternalLink>
            .
          </>
        }
      />
    </div>
  </section>
);

export default Projects;

type ProjectProps = {
  title: string;
  titleAdornment: React.ReactNode;
  description: React.ReactNode;
};

const Project = ({ title, titleAdornment, description }: ProjectProps) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <h3>{title}</h3>
      {titleAdornment}
    </div>
    <div className="m-0 text-justify">{description}</div>
  </div>
);

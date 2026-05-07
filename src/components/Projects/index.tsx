import { AnimatePresence, motion } from 'motion/react';
import { useState, type ReactNode } from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';
import Cropper from 'react-easy-crop';
import 'react-easy-crop/react-easy-crop.css';

import { arrayMove, cn, useMediaQuery, useScrollIntoViewWhenNeeded } from '#src/lib/utils';

import AppImage from '../AppImage';
import ExternalLink from '../ExternalLink';
import GithubButton from '../GithubButton';
import { Typography } from '../Typography';
import concoursAdmisIllustration from './concoursadmis.png';
import dogIllustration from './dog.jpeg';
import medicalistIllustration from './medicalist.png';

type ProjectData = {
  key: string;
  title: string;
  titleAdornment?: ReactNode;
  description: ReactNode;
  preview: ReactNode;
};

const projects: ProjectData[] = [
  {
    key: 'react-easy-crop',
    title: 'react-easy-crop',
    titleAdornment: <GithubButton user="ValentinH" repo="react-easy-crop" />,
    preview: <ReactEasyCropDemo />,
    description: (
      <Typography as="div">
        A React component library to crop images with easy interactions. I&apos;ve started to
        implement this component at work for the listing form of{' '}
        <Typography
          as={ExternalLink}
          variant="body"
          color="primary"
          href="https://ricardo.ch"
          title="Ricardo.ch"
        >
          Ricardo.ch
        </Typography>
        .<br /> Then, I thought it was a nice project and I decided to continue working on it on my
        personal time and made it open-source with the agreement of my employer.
        <br />
        Today, it has been downloaded near 100 million times on NPM.
      </Typography>
    ),
  },
  {
    key: 'react-easy-sort',
    title: 'react-easy-sort',
    titleAdornment: <GithubButton user="ValentinH" repo="react-easy-sort" />,
    preview: <ReactEasySortDemo />,
    description: (
      <Typography as="div">
        A React component library to build sortable lists and grids with simple drag interactions.
        It focuses on the boring-but-good API shape: bring your own markup and styles, wrap the
        sortable items, and keep state ownership in your app.
      </Typography>
    ),
  },
  {
    key: 'concoursadmis',
    title: 'ConcoursAdmis',
    titleAdornment: (
      <Typography
        as={ExternalLink}
        variant="body"
        color="primary"
        href="https://www.concoursadmis.fr"
        title="ConcoursAdmis"
      >
        concoursadmis.fr
      </Typography>
    ),
    preview: (
      <AppImage
        src={concoursAdmisIllustration}
        alt="ConcoursAdmis illustration"
        width={634}
        height={517}
        layout="constrained"
        className="max-h-full max-w-full object-contain"
      />
    ),
    description: (
      <>
        <Typography>
          Shipped the AI-powered oral exam simulation feature for ConcoursAdmis (a friend&apos;s
          project), a SaaS platform preparing candidates for French gendarmerie entrance exams.
        </Typography>
        <Typography className="mt-3">
          Built a realistic voice-based mock interview experience using the OpenAI Realtime API,
          dynamic voice activity detection for turn-taking, Gemini Flash 3 for subject/question
          generation, timestamped transcripts, recording playback, and detailed AI feedback reports
          covering answer content, speech patterns, pacing, and delivery.
        </Typography>
      </>
    ),
  },
  {
    key: 'medicalist',
    title: 'Medicalist',
    titleAdornment: (
      <Typography
        as={ExternalLink}
        variant="body"
        color="primary"
        href="https://medicalist.fr"
        title="Medicalist"
      >
        medicalist.fr
      </Typography>
    ),
    preview: (
      <AppImage
        src={medicalistIllustration}
        alt="Medicalist illustration"
        width={639}
        height={547}
        layout="constrained"
        className="max-h-full max-w-full object-contain"
      />
    ),
    description: (
      <Typography as="div">
        This is a react-native application to manage your medicines and learn about them. As this is
        using open-data from the French government, it is only available in French.
        <br />
        <ul className="my-2 pl-5">
          <Typography as="li">Scan medicine boxes using their QR code or barcode</Typography>
          <Typography as="li">Keep track of your stock and add personal notes</Typography>
          <Typography as="li">Search for any medicine</Typography>
          <Typography as="li">
            Medicine record with all needed information: usage, dosage, composition, price, leaflet,
            etc.
          </Typography>
        </ul>
      </Typography>
    ),
  },
  {
    key: 'valentin-hervieu',
    title: 'valentin-hervieu.fr',
    preview: (
      <iframe
        src="https://valentin-hervieu.fr"
        title="valentin-hervieu.fr"
        className="h-full w-full border-0"
      />
    ),
    description: (
      <Typography as="div">
        I use this website as a playground to try new things. At the moment, it is built with
        TypeScript, TanStack Start and Tailwind. I have written an article about{' '}
        <Typography
          as={ExternalLink}
          variant="body"
          color="primary"
          href="https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c"
          title="How I used Google Photos to host my pictures gallery"
        >
          how I used Google Photos to host my pictures gallery
        </Typography>
        .
      </Typography>
    ),
  },
];

type ProjectKey = (typeof projects)[number]['key'];

const accordionEase = [0.25, 0.46, 0.45, 0.94] as const;

const Projects = () => {
  const [activeProjectKey, setActiveProjectKey] = useState<ProjectKey>('react-easy-crop');
  const [scrollTargetProjectKey, setScrollTargetProjectKey] = useState<ProjectKey | null>(null);
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const activeProject = projects.find((project) => project.key === activeProjectKey) ?? projects[0];
  const canRenderPreview = isMobile !== null;
  const onSelectProject = (projectKey: ProjectKey) => {
    setActiveProjectKey(projectKey);

    if (isMobile) {
      setScrollTargetProjectKey(projectKey);
    }
  };

  return (
    <section>
      <Typography as="h2" variant="sectionTitle" color="heading" className="mb-4">
        Projects
      </Typography>
      <div className="mb-6 grid overflow-hidden rounded-sm border border-solid border-black/10 bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.12)] lg:min-h-[620px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col border-black/10 lg:border-r">
          {projects.map((project) => (
            <ProjectAccordionItem
              key={project.key}
              project={project}
              isActive={project.key === activeProjectKey}
              shouldScrollToHeader={scrollTargetProjectKey === project.key}
              shouldRenderPreview={canRenderPreview && isMobile}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {!isMobile && canRenderPreview ? (
          <div className="relative flex items-center justify-center bg-slate-100 min-h-0 p-4">
            <ProjectPreview key={activeProject.key} project={activeProject} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;

type ProjectAccordionItemProps = {
  project: (typeof projects)[number];
  isActive: boolean;
  shouldScrollToHeader: boolean;
  shouldRenderPreview: boolean;
  onSelect: (key: ProjectKey) => void;
};

const ProjectAccordionItem = ({
  project,
  isActive,
  shouldScrollToHeader,
  shouldRenderPreview,
  onSelect,
}: ProjectAccordionItemProps) => {
  const headerRef = useScrollIntoViewWhenNeeded<HTMLDivElement>({
    delayMs: 300,
    shouldScroll: isActive && shouldScrollToHeader,
  });

  return (
    <div className={cn('relative border-b border-black/10 last:border-b-0', isActive && 'lg:grow')}>
      <div 
          ref={headerRef} className="relative flex items-center px-4 py-5">
        <button
          type="button"
          aria-expanded={isActive}
          aria-controls={`${project.key}-description`}
          onClick={() => onSelect(project.key)}
          className="flex min-w-0 flex-1 cursor-pointer items-center gap-3 border-0 bg-transparent text-left before:absolute before:inset-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
        >
          <span
            className={cn(
              'relative h-4 w-4 shrink-0 rounded-full border border-solid border-black/10 bg-white ring-4 ring-black/[0.03]',
              isActive && 'border-primary/20 bg-primary ring-primary/20',
            )}
            aria-hidden="true"
          />
          <Typography
            as="span"
            variant="bodyStrong"
            color="heading"
            className="relative min-w-0 whitespace-nowrap"
          >
            {project.title}
          </Typography>
        </button>

        {project.titleAdornment && (
          <div className="relative z-10 shrink-0">
            {project.titleAdornment}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isActive ? (
          <motion.div
            id={`${project.key}-description`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: accordionEase },
              opacity: { duration: 0.16, ease: accordionEase },
            }}
            className="overflow-hidden"
          >
            <Typography as="div" className="mx-4 lg:ml-12">
              {project.description}
            </Typography>
            {shouldRenderPreview ? (
              <div className="mx-4 mb-4 bg-slate-100 p-2 rounded overflow-hidden">
                <ProjectPreview key={project.key} project={project} />
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const ProjectPreview = ({ project }: { project: ProjectData }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.18, ease: accordionEase }}
    className="flex h-[300px] w-full items-center rounded overflow-hidden justify-center lg:h-full lg:min-h-full"
  >
    <div className="flex grow h-full w-full items-center justify-center">{project.preview}</div>
  </motion.div>
);

function ReactEasyCropDemo() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <div className="relative h-full w-full overflow-hidden rounded bg-black">
      <Cropper
        image={dogIllustration}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onZoomChange={setZoom}
      />
    </div>
  );
}

const sortableQuotes = [
  'Make sure you are building the right thing before building the thing right',
  'You Are Not Gonna Need It',
  'Perfect is the enemy of good',
  "Don't reinvent the wheel",
  'Prefer duplication over the wrong abstraction',
  'Ship the smallest useful thing',
  'Make invalid states impossible',
  'Clarity beats cleverness',
] as const;

const mobileHiddenSortableQuotes = new Set(
  [...sortableQuotes].sort((a, b) => b.length - a.length).slice(0, 2),
);

function ReactEasySortDemo() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const items = isMobile
    ? sortableQuotes.filter((item) => !mobileHiddenSortableQuotes.has(item))
    : sortableQuotes;

  return <SortableQuotesDemo key={isMobile ? 'mobile' : 'desktop'} items={items} />;
}

function SortableQuotesDemo({ items }: { items: readonly string[] }) {
  const [sortedItems, setSortedItems] = useState([...items]);
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setSortedItems((currentItems) => arrayMove(currentItems, oldIndex, newIndex));
  };

  return (
    <SortableList
      onSortEnd={onSortEnd}
      draggedItemClassName="scale-105 cursor-grabbing shadow-xl"
      className={cn(
        'grid h-full w-full grid-cols-2 gap-3',
        sortedItems.length === 6 ? 'grid-rows-3' : 'grid-rows-4',
      )}
    >
      {sortedItems.map((item) => (
        <SortableItem key={item}>
          <Typography
            as="div"
            variant="captionStrong"
            color="heading"
            className="flex h-full cursor-grab select-none items-center justify-center rounded bg-white p-4 text-center shadow active:cursor-grabbing"
          >
            {item}
          </Typography>
        </SortableItem>
      ))}
    </SortableList>
  );
}

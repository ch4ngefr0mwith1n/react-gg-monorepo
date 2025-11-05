const prompts = require('prompts');
const { spawn } = require('child_process');
const path = require('path');

const apps = [
  {
    "path": "challenges/02-describing-ui/01-jsx/01-badge-variables"
  },
  {
    "path": "challenges/02-describing-ui/01-jsx/02-dynamic-date"
  },
  {
    "path": "challenges/02-describing-ui/01-jsx/03-adjacent-elements"
  },
  {
    "path": "challenges/02-describing-ui/01-jsx/04-conditional-rendering"
  },
  {
    "path": "challenges/02-describing-ui/01-jsx/05-ternary-rendering"
  },
  {
    "path": "challenges/02-describing-ui/01-jsx/06-rendering-lists"
  },
  {
    "path": "challenges/02-describing-ui/01-jsx/07-rendering-lists-no-keys"
  },
  {
    "path": "challenges/02-describing-ui/02-props/01-string-props"
  },
  {
    "path": "challenges/02-describing-ui/02-props/02-object-props"
  },
  {
    "path": "challenges/02-describing-ui/02-props/03-function-props"
  },
  {
    "path": "challenges/02-describing-ui/02-props/04-children-props"
  },
  {
    "path": "challenges/03-bringing-react-to-life/01-handling-events/01-character-limit"
  },
  {
    "path": "challenges/03-bringing-react-to-life/01-handling-events/02-character-limit-props"
  },
  {
    "path": "challenges/03-bringing-react-to-life/02-preserving-values-with-usestate/01-light-switch"
  },
  {
    "path": "challenges/03-bringing-react-to-life/02-preserving-values-with-usestate/02-light-switch-concise"
  },
  {
    "path": "challenges/03-bringing-react-to-life/02-preserving-values-with-usestate/03-counter"
  },
  {
    "path": "challenges/03-bringing-react-to-life/03-using-usestate/01-smart-character-limit"
  },
  {
    "path": "challenges/03-bringing-react-to-life/03-using-usestate/02-password-toggle"
  },
  {
    "path": "challenges/03-bringing-react-to-life/03-using-usestate/03-multistep-form"
  },
  {
    "path": "challenges/03-bringing-react-to-life/03-using-usestate/04-form-builder"
  },
  {
    "path": "challenges/04-escaping-react/01-managing-effects/01-search-filter"
  },
  {
    "path": "challenges/04-escaping-react/02-managing-effects-part-2/01-clock"
  },
  {
    "path": "challenges/04-escaping-react/02-managing-effects-part-2/02-country-info"
  },
  {
    "path": "challenges/04-escaping-react/02-managing-effects-part-2/03-hacker-news"
  },
  {
    "path": "challenges/04-escaping-react/03-preserving-values-with-useref/01-autofocus"
  },
  {
    "path": "challenges/04-escaping-react/03-preserving-values-with-useref/02-video-player"
  },
  {
    "path": "challenges/04-escaping-react/03-preserving-values-with-useref/03-field-notes"
  },
  {
    "path": "challenges/04-escaping-react/03-preserving-values-with-useref/04-click-outside"
  },
  {
    "path": "challenges/04-escaping-react/03-preserving-values-with-useref/05-expanding-textarea"
  },
  {
    "path": "challenges/04-escaping-react/03-preserving-values-with-useref/06-follow-the-leader"
  },
  {
    "path": "challenges/04-escaping-react/04-teleportation-with-context/01-auth"
  },
  {
    "path": "challenges/04-escaping-react/04-teleportation-with-context/02-translations"
  },
  {
    "path": "challenges/04-escaping-react/04-teleportation-with-context/03-tabs"
  },
  {
    "path": "challenges/04-escaping-react/04-teleportation-with-context/04-news-feed"
  },
  {
    "path": "challenges/05-optimizing-react/01-complex-state-with-usereducer/01-multistep-form-reducer"
  },
  {
    "path": "challenges/05-optimizing-react/01-complex-state-with-usereducer/02-task-manager"
  },
  {
    "path": "challenges/05-optimizing-react/01-complex-state-with-usereducer/03-add-to-cart"
  },
  {
    "path": "challenges/05-optimizing-react/01-complex-state-with-usereducer/04-undo-redo"
  },
  {
    "path": "challenges/05-optimizing-react/02-referential-equality-and-why-it-matters/01-localized-primes"
  },
  {
    "path": "challenges/05-optimizing-react/02-referential-equality-and-why-it-matters/02-data-table"
  },
  {
    "path": "challenges/05-optimizing-react/02-referential-equality-and-why-it-matters/03-optimizing-renders"
  },
  {
    "path": "challenges/05-optimizing-react/03-managing-advanced-effects/01-react-ruler"
  },
  {
    "path": "challenges/05-optimizing-react/03-managing-advanced-effects/02-flexible-tooltip"
  },
  {
    "path": "challenges/05-optimizing-react/03-managing-advanced-effects/03-match-media"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/01-useDocumentTitle"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/02-useDefault"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/03-useToggle"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/04-usePrevious"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/05-usePreferredLanguage"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/06-useFavicon"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/07-useCopyToClipboard"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/08-useInterval"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/09-useCounter"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/10-useLockBodyScroll"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/11-useQueue"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/12-useTimeout"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/13-useWindowSize"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/14-useVisibilityChange"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/15-useList"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/16-useObjectState"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/17-useDebounce"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/18-useContinuousRetry"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/19-useHistoryState"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/20-useEventListener"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/21-useRandomInterval"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/22-useMediaQuery"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/23-useIntervalWhen"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/24-useMouse"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/25-useClickAway"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/26-useWindowScroll"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/27-useLogger"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/28-useOrientation"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/29-useBattery"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/30-usePageLeave"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/31-useKeyPress"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/32-useThrottle"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/33-useIdle"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/34-useFetch"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/35-useCountdown"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/36-useGeolocation"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/37-useLocalStorage"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/38-useSessionStorage"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/39-useIsClient"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/40-useNetworkState"
  },
  {
    "path": "challenges/07-rebuilding-usehooks/41-useLongPress"
  },
  {
    "path": "challenges/08-concurrent-rendering/01-concurrent-rendering/01-marathon-tabs"
  },
  {
    "path": "challenges/08-concurrent-rendering/01-concurrent-rendering/02-filter-results"
  },
  {
    "path": "challenges/08-concurrent-rendering/02-actions/01-file-upload"
  },
  {
    "path": "challenges/08-concurrent-rendering/03-useoptimistic/01-file-progress"
  },
  {
    "path": "challenges/08-concurrent-rendering/04-composing-boundaries/01-book-search"
  },
  {
    "path": "challenges/08-concurrent-rendering/04-composing-boundaries/02-book-router"
  }
];

async function main() {
  const choices = apps.map((app, i) => ({
    title: app.path,
    value: i
  }));

  const response = await prompts({
    type: 'select',
    name: 'app',
    message: 'Select an app to run:',
    choices: choices
  });

  if (response.app === undefined) {
    process.exit(0);
  }

  const selected = apps[response.app];
  const appPath = path.join(__dirname, '..', selected.path);

  console.log(`\n🚀 Starting: ${selected.path}\n`);

  const child = spawn('pnpm', ['dev'], {
    cwd: appPath,
    stdio: 'inherit'
  });

  child.on('close', (code) => {
    process.exit(code);
  });
}

main();

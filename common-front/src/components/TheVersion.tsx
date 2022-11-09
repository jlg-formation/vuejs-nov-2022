import { version } from "../../package.json";

export default ({ frontVersion }: { frontVersion: string }) => (
  <div title="coucou">
    <p>Version projet commun: {version}</p>
    <p>Version Front: {frontVersion}</p>
  </div>
);

import { version } from "../../package.json";

const truc = [1, 2];

export default ({ frontVersion }: { frontVersion?: string }) => (
  <div title="coucou">
    <p>Version projet commun: {version}</p>
    {frontVersion !== undefined && <p>Version Front: {frontVersion}</p>}
    {truc.map((n) => (
      <div>
        <span>{n}</span>
      </div>
    ))}
  </div>
);

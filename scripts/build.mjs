import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const astroBin = join(root, "node_modules", "astro", "bin", "astro.mjs");
const result = spawnSync(process.execPath, [astroBin, "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: "1"
  }
});

process.exit(result.status ?? 1);

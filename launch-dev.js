const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const cwd = process.cwd();
const logPath = path.join(cwd, "next-dev.log");
const pidPath = path.join(cwd, "next-dev.pid");

function isRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

if (fs.existsSync(pidPath)) {
  const existingPid = Number(fs.readFileSync(pidPath, "utf8").trim());

  if (Number.isInteger(existingPid) && isRunning(existingPid)) {
    console.log(`Next dev server already running with PID ${existingPid}`);
    process.exit(0);
  }

  try {
    fs.unlinkSync(pidPath);
  } catch {}
}

const out = fs.openSync(logPath, "a");
const nextCli = path.join(cwd, "node_modules", "next", "dist", "bin", "next");

const child = spawn(process.execPath, [nextCli, "dev"], {
  cwd,
  detached: true,
  stdio: ["ignore", out, out]
});

fs.writeFileSync(pidPath, String(child.pid));
child.unref();

console.log(`Started Next dev server with PID ${child.pid}`);

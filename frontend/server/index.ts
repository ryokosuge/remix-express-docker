import path from "path";
import express from "express";
import compression from "compression";
import morgan from "morgan";
import { createRequestHandler } from "@remix-run/express";

const BUILD_DIR = path.join(process.cwd(), "build");

const app = express();
app.use(compression());
app.use(morgan("tiny"));

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

app.all(
  "*",
  process.env.NODE_ENV === "development"
    ? (req, res, next) => {
        purgeRequireCache();
        createRequestHandler({
          build: require(BUILD_DIR),
          mode: process.env.NODE_ENV,
        })(req, res, next);
      }
    : createRequestHandler({
        build: require(BUILD_DIR),
        mode: process.env.NODE_ENV,
      })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

const purgeRequireCache = () => {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, but then you'll have to reconnect to databases/etc on each
  // change. We prefer the DX of this, so we've included it for you by default
  for (let key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
};

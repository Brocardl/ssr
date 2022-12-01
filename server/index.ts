import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import ReactDOMServer from "react-dom/server";

import App from '../client/src/App';

const app = express();
const port = 3000;

const corsOptions = {
  origin: "localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.get("/users", (req: Request, res: Response) => {
  res.send([
    {
      id: 0,
      username: "Ramsay",
    },
    {
      id: 1,
      username: "Irvan",
    },
    {
      id: 2,
      username: "Sam",
    },
  ]);
});

import AdController from "./ads/controller";
import setupDb from "./db";
import { createExpressServer } from "routing-controllers";

const port = process.env.PORT || 4000;

const app = createExpressServer({
  cors: true,
  controllers: [AdController]
});

setupDb()
  .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.error(err));

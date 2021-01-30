import express from "express";
import routes from "./routes/index";
import errorResponse from "./utils/errorResponse";
// import isJsonValid from "./middlewares/isValidJson";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.use(isJsonValid);
app.use(routes);

app.use((req, res) => {
  res.status(404).send({
    status: "error",
    error: "404 Page Not Found",
  });
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => errorResponse(res, error));

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`App is listening to port at localhost:${PORT}`)
);
export default app;

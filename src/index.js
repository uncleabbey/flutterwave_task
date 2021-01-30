import express from "express";
import routes from "./routes/index";
import errorResponse from "./utils/errorResponse";

// initialize express
const app = express();

// port to that express will listen
const PORT = process.env.PORT || 3000;

// middleware to catch all json body
app.use(express.json());

// our defined routes
app.use(routes);

//  listen for undefined routes
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "404 Page Not Found.",
    data: null,
  });
});

// error middleware
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => errorResponse(res, error));

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`App is listening to port at localhost:${PORT}`)
);
export default app;

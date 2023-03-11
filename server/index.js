import app from './app';

const PORT = process.env.PORT || 4000;

function executeServer() {
  try {
    const server = app.listen(PORT, function () {
      console.log(`Node server running on port ${PORT}`);
    });

    return server;
  } catch (err) {
    console.error(`ERROR connecting to ${PORT}`, err);
  }
}

const server = executeServer();

export default server;
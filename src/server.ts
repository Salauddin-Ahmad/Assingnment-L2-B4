import { Server } from "http";
import app from "./app";

const PORT = 8000;

let server: Server;

async function bootstrap() {
  server = app.listen(PORT, () => {
    console.log(`Server is running on ${"unknown"}`);
  });
}

bootstrap();

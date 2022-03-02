import Hello from "../components/hello-world.client.js";
import World from "../components/hello-world.server.js";

export default function Page() {
  return (
    <>
      <Hello />
      <World />
    </>
  );
}

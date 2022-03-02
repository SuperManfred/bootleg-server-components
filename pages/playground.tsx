import { Grid, Input } from "@geist-ui/core";

export default function Playground() {
  //   RenderLog("Playground");

  return (
    <>
      <Grid.Container
        width="100%"
        justify="center"
        height={"100%"}
        alignItems="center"
        alignContent="center"
      >
        <Input placeholder="into the wild" className="wildthing" />
        {/* a place to render something else */}
      </Grid.Container>
    </>
  );
}

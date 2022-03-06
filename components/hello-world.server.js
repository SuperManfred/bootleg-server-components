import {
  Grid,
  Input,
  Badge,
  Spacer,
  Text,
  Image,
  Tag,
  Card,
  Dot,
  Divider,
  Description,
} from "@geist-ui/core";
import { Github } from "@geist-ui/icons";
import Client from "./hello-world.client.js";

export default function Server() {
  return (
    <>
      <section>
        <Client />
      </section>
      <section>for a little...</section>
    </>
  );
}

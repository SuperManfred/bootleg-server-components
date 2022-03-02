// simulate the dummy site of the relying party in local development
import React from "react";
import { Link } from "@geist-ui/core";
import NextLink from "next/link";
import ThemeToggle from "../components/theme-toggle";
import { useRouter } from "next/router";
// import RenderDevContextTools from '../components/dev-context-tools';
import { VERCEL_URL } from "../config/env.config";
// import { RenderLog } from '../utils/devtools';
import {
  URL_PATH_IDENTIFY_USER,
  URL_PATH_INDEX,
  URL_PATH_PLAYGROUND,
  URL_PATH_PLAYGROUND2,
  URL_PATH_VERIFY_COMPANY,
} from "../config/url.config";

export default function RelyingParty() {
  //   RenderLog('Relying Party');

  // a function that creates a popup window at the root of the OIDC Provider
  const router = useRouter();
  const [url, setUrl] = React.useState<string>("http://localhost:3000");

  React.useEffect(() => {
    setUrl(VERCEL_URL ? "" : `http://${window.location.host}`);
  }, []);

  function openWindow(path: string) {
    window.open(
      `${url}${path}`,
      "popup",
      "width=400,height=700,scrollbars=no,resizable=no, toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,top=0,left=0"
    );
  }

  return (
    <div>
      <ThemeToggle />
      {/* <RenderDevContextTools /> */}
      <h1>Relying Party</h1>
      <p>
        We like to party with <b>strongly</b> authenticated verified users 🥳
      </p>
      <p>
        <button
          name={URL_PATH_INDEX}
          onClick={() => openWindow(URL_PATH_INDEX)}
        >
          popup(Index)
        </button>
        or nav
        <NextLink href={URL_PATH_INDEX}>
          <Link block>~/index.tsx</Link>
        </NextLink>
      </p>
      <p>
        <button onClick={() => openWindow(URL_PATH_PLAYGROUND)}>
          popup(Playground)
        </button>
        or nav
        <NextLink href={URL_PATH_PLAYGROUND}>
          <Link block>~/playground</Link>
        </NextLink>
      </p>

      <p>
        <button onClick={() => openWindow(URL_PATH_PLAYGROUND2)}>
          popup(Playground2)
        </button>
        or nav
        <NextLink href={URL_PATH_PLAYGROUND2}>
          <Link block>~/playground2</Link>
        </NextLink>
      </p>

      <p>
        <button onClick={() => openWindow(URL_PATH_IDENTIFY_USER)}>
          popup(IdentifyUser)
        </button>
        or
        <NextLink href={URL_PATH_IDENTIFY_USER}>
          <Link block>~/identify-user</Link>
        </NextLink>
      </p>

      <p>
        <button onClick={() => openWindow(URL_PATH_VERIFY_COMPANY)}>
          popup(VerifyCompany)
        </button>
        or
        <NextLink href={URL_PATH_VERIFY_COMPANY}>
          <Link block>~/verify/company</Link>
        </NextLink>
      </p>
    </div>
  );
}

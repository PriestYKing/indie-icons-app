import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-4 border-t w-full mt-10 h-32">
      <div className="flex flex-col">
        <p>Released under the ISC License.</p>
        <p>Copyright © 2025 Indic Inc.</p>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">License</Link>
        <Link href="/">Privacy</Link>
        <Link href="/">Terms</Link>
      </div>
      <div className="flex items-center gap-4">
        <Button>
          Powered by <i>WILL</i>
        </Button>
        <Button>
          Built for <i>YOU</i>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;

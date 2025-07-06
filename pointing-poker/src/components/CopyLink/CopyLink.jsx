import { useState } from "react";
import "./CopyLink.css";

export default function CopyLink({ gameID }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const baseUrl = window.location.origin;
    const url = new URL(baseUrl);
    url.searchParams.set("gameID", gameID);
    url.searchParams.set("joinGame", "true");

    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button className="copy-link-button" onClick={handleCopy}>
      {copied ? "Link Copied!" : "Copy Game Link"}
    </button>
  );
}

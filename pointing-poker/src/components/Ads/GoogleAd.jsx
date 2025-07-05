import { useEffect } from "react";

export default function GoogleAd({ slot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsbygoogle push error:", err);
    }
  }, []);

  console.log("Mode: ", import.meta.env.MODE);

  if (import.meta.env.MODE !== "production") return null;

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

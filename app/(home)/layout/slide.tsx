"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const SlideLayout = () => {
  const { t } = useTranslation();
  const [iframeCode, setIframeCode] = useState("");

  return (
    <div className="w-full mt-10">
      <h1>{t("hello")}</h1>
      <p>{t("language")}</p>
      <input
        value={iframeCode}
        onChange={(e) => setIframeCode(e.target.value)}
        placeholder="Enter iframe code"
        className="border p-2 w-full mt-4"
      />

      <div className="mt-4">
        <h3>Result:</h3>
        <div
          dangerouslySetInnerHTML={{ __html: iframeCode }}
          className="border w-fit min-h-[300px] max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default SlideLayout;

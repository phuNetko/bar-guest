"use client";
import { useTranslation } from "react-i18next";

const SlideLayout = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hello")}</h1>
      <p>{t("language")}</p>
    </div>
  );
};

export default SlideLayout;
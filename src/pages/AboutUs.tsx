import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("aboutUs.title")}</h1>
      <h2>{t("aboutUs.ourBeginnings")}</h2>
      <p>{t("aboutUs.beginnings")}</p>
      <h2>{t("aboutUs.ourExpertise")}</h2>
      <p>{t("aboutUs.expertise")}</p>
      <h2>{t("aboutUs.ourMission")}</h2>
      <p>{t("aboutUs.mission")}</p>
      <h2>{t("aboutUs.ourAdvantages")}</h2>
      <p>{t("about.advantages")}</p>
      <h2>{t("aboutUs.ourProjects")}</h2>
      <p>{t("aboutUs.projects")}</p>
      <h2>{t("aboutUs.contactUs")}</h2>
      <p>{t("aboutUs.contac")}</p>
    </div>
  );
};

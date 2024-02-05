import { useTranslation } from "react-i18next";
import { Container, SectionTitle, Paragraph, Div } from "./aboutUsStyles";

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Div>
        <SectionTitle>{t("aboutUs.title")}</SectionTitle>
        <Paragraph>{t("aboutUs.subtitle")}</Paragraph>
      </Div>
      <Div>
        <SectionTitle>{t("aboutUs.ourBeginnings")}</SectionTitle>
        <Paragraph>{t("aboutUs.beginnings")}</Paragraph>
      </Div>
      <Div>
        <SectionTitle>{t("aboutUs.ourExpertise")}</SectionTitle>
        <Paragraph>{t("aboutUs.expertise")}</Paragraph>
      </Div>
      <Div>
        <SectionTitle>{t("aboutUs.ourMission")}</SectionTitle>
        <Paragraph>{t("aboutUs.mission")}</Paragraph>
      </Div>
      <Div>
        <SectionTitle>{t("aboutUs.ourAdvantages")}</SectionTitle>
        <Paragraph>
          <ul>
            <li>{t("aboutUs.quality")}</li>
            <li>{t("aboutUs.innovations")}</li>
            <li>{t("aboutUs.fastDelivery")}</li>
          </ul>
        </Paragraph>
      </Div>

    </Container>
  );
};

import { Div, Contact, ListDay } from "./footerStyles";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Div>
      <div>
        <p>{t("footer.title")}</p>
        <p>{t("footer.workSchedule")}</p>
        <ListDay>
          <li>{t("footer.Mon")}: 10:00 - 18:00</li>
          <li>{t("footer.Tue")}: 10:00 - 18:00</li>
          <li>{t("footer.Wed")}: 10:00 - 18:00</li>
          <li>{t("footer.Thu")}: 10:00 - 18:00</li>
          <li>{t("footer.Fri")}: 10:00 - 18:00</li>
          <li>{t("footer.Sat")}</li>
          <li>{t("footer.Sun")}</li>
        </ListDay>
      </div>
      <Contact>
        <p>{t("footer.contact")}</p>
        <a>+380 (66) 451-43-77</a>
        <a>+380 (67) 232-18-47</a>
        <a>0664514377@ukr.net</a>
      </Contact>
      <address>
        <p>{t("footer.address")}</p>
        <p>{t("footer.str")}</p>
        <p>{t("footer.district")}</p>
        <p>{t("footer.region")}</p>
      </address>
    </Div>
  );
};

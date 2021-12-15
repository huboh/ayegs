import { FC } from "react";
import './secondary-footer.scss';
import DownloadApp from "../../../DownloadApp";
import NewsletterForm from "../../../NewsletterForm";

const SecondaryFooter: FC = () => {
  return (
    <section className="secondary-footer">
      <NewsletterForm onSubscribe={ (email) => console.log(email) } />
      <DownloadApp />
    </section>
  );
};

export default SecondaryFooter;
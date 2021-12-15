import { FC } from "react";
import './primary-footer.scss';
import ColumnItem from "../ColumnItem";
import FooterColumn from "../FooterColumn";

const PrimaryFooter: FC = () => {
  return (
    <section className="primary-footer-wrapper">
      <FooterColumn columnTitle="About Us">
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
      </FooterColumn>

      <FooterColumn columnTitle="Get In Touch">
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
      </FooterColumn>

      <FooterColumn columnTitle="Account">
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
      </FooterColumn>

      <FooterColumn columnTitle="About Us">
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
      </FooterColumn>
    </section>
  );
};

export default PrimaryFooter;
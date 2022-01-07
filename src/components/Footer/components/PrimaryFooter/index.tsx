import { FC } from "react";
import './primary-footer.scss';
import ColumnItem from "../ColumnItem";
import FooterColumn from "../FooterColumn";

const PrimaryFooter: FC = () => {
  return (
    <section className="primary-footer-wrapper">
      <FooterColumn columnTitle="About Us">
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="terms & conditions" />
        <ColumnItem itemLink="/" itemText="need help ?" />
        <ColumnItem itemLink="/" itemText="about us" />
        <ColumnItem itemLink="/" itemText="FAQs" />
      </FooterColumn>

      <FooterColumn columnTitle="Get In Touch">
        <ColumnItem itemLink="/" itemText="08011111111" />
        <ColumnItem itemLink="/" itemText="aora@aoramail.com" />
        <ColumnItem itemLink="/" itemText="live chat" />
      </FooterColumn>

      <FooterColumn columnTitle="Account">
        <ColumnItem itemLink="/dashboard" itemText="dashboard" />
        <ColumnItem itemLink="/cart" itemText="my cart" />
        <ColumnItem itemLink="/wishlist" itemText="wishlist" />
        <ColumnItem itemLink="/orders" itemText="orders" />
        <ColumnItem itemLink="/checkout" itemText="checkout" />
      </FooterColumn>

      <FooterColumn columnTitle="About Us">
        <ColumnItem itemLink="/" itemText="Privacy & Policy" />
        <ColumnItem itemLink="/" itemText="terms & conditions" />
        <ColumnItem itemLink="/" itemText="need help ?" />
        <ColumnItem itemLink="/" itemText="about us" />
        <ColumnItem itemLink="/" itemText="FAQs" />
      </FooterColumn>
    </section>
  );
};

export default PrimaryFooter;
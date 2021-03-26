import * as React from "react";
import "../components/bootstrap.min.css";
import Layout from "../components/layout";
import HeroSection from "../components/reusable/HeroSection";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <HeroSection
        // img={data.img.childImageSharp.fluid}
        title="Hello World"
        subtitle="This is new Website"
        heroclass="hero-background"
      />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "main.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default IndexPage;

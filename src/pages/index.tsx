import React from 'react';
import { useSelector } from 'react-redux';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/SEO/seo';
import { IndexPageWrapper } from '../components/Page/index.page.style';
import Particles from '../components/Particles/Particles';

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Particles />
      <Layout>
        <IndexPageWrapper>
          <SEO title="Home" />
          <h1>Hi I'm, Eric Zorn,</h1>
          <p>I am a Full-Stack Software Engineer</p>
          <p>
            <em>Specializing in JavaScript, Python, and Ruby</em>
          </p>
          <p>Passionate Tech Enthusiast, Programmer, and Golfer</p>
          <Link to="/page-2/">Go to page 2</Link>
        </IndexPageWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;

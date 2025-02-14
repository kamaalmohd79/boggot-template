import React from "react";
import classNames from 'classnames';
import "./Tools.scss"; // Import SCSS file
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Tools = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

  const toolsData = [
    {
      category: "Writing",
      tools: ["Google Docs", "GitBook", "Confluence", "and more"],
    },
    {
      category: "With Code",
      tools: ["HTML", "Markdown", "Prismic", "Docusaurus", "and more"],
    },
    {
      category: "API Docs",
      tools: ["Swagger", "Postman", "Redoc"],
    },
    {
      category: "Version Control",
      tools: ["GitHub", "GitLab", "Bitbucket"],
    },
    {
      category: "Visual",
      tools: ["Figma", "Snagit", "GIFs", "Loom Videos"],
    },
    {
      category: "Hosting & Publishing",
      tools: ["ReadTheDocs", "GitHub Pages", "Vercel", "Netlify"],
    },
  ];

  const sectionHeader = {
    title: 'Our Stack',
    paragraph: ''
  };

  return (
    <section {...props}
      className={innerClasses}>
      <SectionHeader data={sectionHeader} className="center-content" />
      <div className="container">
        <div className="card-container">
          {toolsData.map((tool, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{tool.category}</h3>
              <ul className="card-content">
                {tool.tools.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Tools.propTypes = propTypes;
Tools.defaultProps = defaultProps;

export default Tools;

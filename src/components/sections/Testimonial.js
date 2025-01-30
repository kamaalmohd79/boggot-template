import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'What Our Clients Are Saying',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Everything went smooth, Kamaal helped us update our Help Center with valuable technical articles for our API's and Webhooks. Our company does Payment Processing.
                  </p>
                </div>
                <div className='mt-8' style={{ display: "flex" }}>
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={require('./../../assets/images/icons8-star-filled.png')}
                      alt="Rating Stars"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Duke Vu</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://fungies.io/" target="_blank" rel="noopener noreferrer">Fungies.io</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Mohd does excellent and thorough work. I have enjoyed working with him. We will use him again.
                  </p>
                </div>
                <div className='mt-8' style={{ display: "flex" }}>
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={require('./../../assets/images/icons8-star-filled.png')}
                      alt="Rating Stars"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">James Stephens</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#https://krown.network/" target="_blank">Krown Network</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Mohd did great work for us. He apply the feedback and delivered all milestones on time. Thanks!
                  </p>
                </div>
                <div className='mt-8' style={{ display: "flex" }}>
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={require('./../../assets/images/icons8-star-filled.png')}
                      alt="Rating Stars"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Carlos Guillermo</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#https://adapi.kopicloud.com/" target="_blank">KopiCloud AD API</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
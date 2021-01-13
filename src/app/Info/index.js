import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import rAFTimeout from '../../helpers/rAFTimeout';
import Close from '../../components/Close';
import svg from '../../svg/github.svg';
import './index.scss';
import './transition.scss';

class Info extends PureComponent {
  constructor() {
    super();

    this.transition = React.createRef();
    this.view = React.createRef();
    this.close = React.createRef();
    this.onInfoClose = this.onInfoClose.bind(this);
  }

  onInfoClose() {
    rAFTimeout(() => this.view.current.classList.remove('animate-in'), 1);
    rAFTimeout(() => this.close.current.hide(), 20);
    rAFTimeout(() => this.transition.current.classList.remove('animate-in'), 100);
    rAFTimeout(() => {
      this.props.onInfoClose();
      this.view.current.setAttribute('aria-hidden', true);
    }, 110);
  }

  getStyle(show) {
    if (!show) {
      return '';
    }

    rAFTimeout(() => this.transition.current.classList.add('animate-in'), 1);

    rAFTimeout(() => this.close.current.animate(), 50);

    rAFTimeout(() => {
      this.view.current.classList.remove('hide');
      this.view.current.classList.add('animate-in');
      this.view.current.setAttribute('aria-hidden', false);
    }, 150);

    return '';
  }

  render() {
    return <Fragment>
      <div ref={this.transition} className="transition"></div>
      <section ref={this.view} className={`info ${this.getStyle(this.props.show)}`} aria-hidden={true}>
        <Close ref={this.close} onCloseClick={this.onInfoClose} />
        <h1>About</h1>
        <p>2day-Weather (Today Weather)</p>
        <p>This is a personal project built in my spare time for learning purposes.</p>
        <h2>Follow me on </h2>
        <ul>
          <li><a className="link" href="https://twitter.com/iamsatyanchal" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a className="link" href="https://www.instagram.com/iamsatyanchal/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a className="link" href="https://www.linkedin.com/in/satyanchalchaudhary/" target="_blank" rel="noopener noreferrer">LinikedIn</a></li>
          <li><a className="link" href="https://github.com/Bluehatcoders/" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bluehatcoders/" className="github" title="Github">
          <img src={svg} alt="Github icon" width="32" height="32" />
        </a>
<p style="text-align: center;">Thanks for using this app</p>
      </section>
    </Fragment>
  }
}

Info.propTypes = {
  show: PropTypes.bool,
  onInfoClick: PropTypes.func,
  onInfoClose: PropTypes.func
};

export default Info;

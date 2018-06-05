import React from 'react'
import { withStyles } from 'material-ui/styles'
import Tooltip from 'material-ui/Tooltip'
import ECMAScript from './../media/ecmascript-logo.jsx'
import nodejs from './../media/nodejs-logo.jsx'
import npm from './../media/npm-logo.jsx'
import webpack from './../media/webpack-logo.jsx'
import react from './../media/react-logo.jsx'
import redux from './../media/redux-logo.jsx'
import leaflet from './../media/leaflet-logo.jsx'
import materialUI from './../media/material-ui-logo.jsx'
import materialDesign from './../media/material-design-logo.jsx'

const technologies = [
  {
    title: 'Material Design',
    link: 'https://material.io',
    logo: materialDesign
  },
  {
    title: 'ECMAScript',
    link: 'https://en.wikipedia.org/wiki/ECMAScript',
    logo: ECMAScript
  },
  {
    title: 'NodeJS',
    link: 'https://nodejs.org',
    logo: nodejs
  },
  {
    title: 'Node Package Manager',
    link: 'https://www.npmjs.com',
    logo: npm
  },
  {
    title: 'Webpack',
    link: 'https://webpack.js.org',
    logo: webpack
  },
  {
    title: 'React',
    link: 'https://reactjs.org',
    logo: react
  },
  {
    title: 'Redux',
    link: 'https://redux.js.org',
    logo: redux
  },
  {
    title: 'Material UI',
    link: 'https://www.material-ui.com',
    logo: materialUI
  },
  {
    title: 'Leaflet',
    link: 'https://leafletjs.com',
    logo: leaflet
  }
]

const styles = theme => ({
  root: {
    padding: 2 * theme.spacing.unit,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 'auto'
  },
  logoLink: {
    height: 10 * theme.spacing.unit,
    margin: 1.5 * theme.spacing.unit,
    filter: `drop-shadow(0 ${theme.spacing.unit / 2}px ${theme.spacing.unit /
      2}px hsla(0, 0%, 0%, 0.3))`,
    fontSize: 0
  }
})

const Technologies = ({ classes, ReactGA }) => (
  <div>
    <div className={classes.root}>
      {technologies.map(({ title, link, logo: Logo }, key) => (
        <Tooltip key={key} title={title} placement="top">
          <ReactGA.OutboundLink
            className={classes.logoLink}
            eventLabel={'technology.' + title}
            to={link}
            target="_blank"
            rel="noopener noreferrer">
            Visit {title}
            <Logo style={{ height: '100%' }}>
              <title>Visit {title}</title>
            </Logo>
          </ReactGA.OutboundLink>
        </Tooltip>
      ))}
    </div>
  </div>
)

export default withStyles(styles)(Technologies)

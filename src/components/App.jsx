import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import joinClasses from './../helpers/join-classes'
import Typography from '@material-ui/core/Typography'
import LocationIcon from '@material-ui/icons/LocationOnSharp'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import DownIcon from '@material-ui/icons/KeyboardArrowDownSharp'
import setColorOpacity from './../helpers/set-color-opacity'
import asyncComponent from './../helpers/asyncComponent'

const AsyncBackgroundParticles = asyncComponent(() => import('./BackgroundParticles.jsx'))
const AsyncAbout = asyncComponent(() => import('./About.jsx'))
const AsyncStyles = asyncComponent(() => import('./Styles.jsx'))

const absolute = {
  position: 'absolute'
}

const topBorderSize = 1

const styles = theme => ({
  root: {
    fontFamily: `'Roboto Mono', Consolas, monospace`
  },
  section: {
    minHeight: '100vh',
    '&:first-child': {
      backgroundColor: 'transparent',
      minHeight: `calc(100vh - ${topBorderSize * theme.spacing.unit}px)`
    },
    '&:not(:first-child)': {
      boxSizing: 'border-box',
      boxShadow: `0 0 ${theme.spacing.unit}px 0 black`,
      borderTop: `${topBorderSize * theme.spacing.unit}px ${theme.palette
        .secondary.main} solid`,
      backgroundColor: setColorOpacity(theme.palette.primary.main, 0.85)
    }
  },
  container: {
    maxWidth: '960px',
    margin: 'auto'
  },
  typographyWrapper: {
    padding: '1rem'
  },
  noUserSelect: {
    userSelect: 'none'
  },
  display4: {
    color: 'inherit',
    '@media (max-width: 960px)': {
      fontSize: 9 * theme.spacing.unit
    }
  },
  display3: {
    color: 'inherit',
    '@media (max-width: 960px)': {
      fontSize: 4 * theme.spacing.unit
    }
  },
  w100: { fontWeight: 100 },
  w300: { fontWeight: 300 },
  w400: { fontWeight: 400 },
  w500: { fontWeight: 500 },
  textLink: {
    display: 'inline-block',
    verticalAlign: 'bottom',
    textDecoration: 'none',
    // overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: `''`,
      display: 'block',
      width: '0',
      height: '100%',
      position: 'absolute',
      bottom: '0',
      left: '0',
      borderBottom: `0.04em currentColor solid`,
      transition: 'width .15s cubic-bezier(.5,0,0,1)'
    },
    '&:hover:after': {
      width: '100%'
    }
  },
  textCentered: {
    textAlign: 'center'
  },
  textIcon: {
    color: theme.palette.secondary.main,
    fontSize: '90%',
    verticalAlign: 'baseline'
  },
  leftIcon: {
    // marginRight: '0.1em'
  },
  noWrap: {
    whiteSpace: 'nowrap'
  },
  centeredX: {
    ...absolute,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  centeredY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  centeredXY: {
    ...styles.centedX,
    ...styles.centedY,
    transform: 'translate(-50%, -50%)'
  },
  keepWhiteSpace: {
    whiteSpace: 'pre-wrap'
  },
  themePrimary: { backgroundColor: theme.palette.primary.main },
  themePrimaryContrast: { backgroundColor: theme.palette.primary.contrastText },
  themePrimaryText: { color: theme.palette.primary.main },
  themePrimaryContrastText: { color: theme.palette.primary.contrastText },
  themeSecondary: { backgroundColor: theme.palette.secondary.main },
  themeSecondaryContrast: { backgroundColor: theme.palette.secondary.contrastText },
  themeSecondaryText: { color: theme.palette.secondary.main },
  themeSecondaryContrastText: { color: theme.palette.secondary.contrastText }
})

const App = ({ classes, ReactGA }) => {
  return (
    <div className={classes.root}>
      <section
        className={joinClasses(
          classes.section,
          classes.firstSection,
          classes.centeredY,
          classes.themePrimaryContrastText
        )}>
        <div
          className={joinClasses(classes.typographyWrapper, classes.container)}>
          <Typography
            variant="display4"
            className={joinClasses(
              classes.themePrimaryContrastText,
              classes.noUserSelect,
              classes.w100,
              classes.display4
            )}>
            Hi, I'm Jonas
          </Typography>
          <Typography
            variant="display3"
            className={joinClasses(
              classes.themePrimaryContrastText,
              classes.noUserSelect,
              classes.w300,
              classes.display3
            )}>
            <p>
              I'm a self-taught developer and creator based in{' '}
              <strong className={classes.w400}>
                <span className={classes.noWrap}>
                  <LocationIcon
                    className={joinClasses(classes.textIcon, classes.leftIcon)}
                  />Copenhagen
                </span>
                <span>, Denmark</span>
              </strong>
            </p>
          </Typography>
          <div className={classes.textCentered}>
            <Tooltip title="Read more" placement="bottom">
              <Button color="secondary" variant="fab" component="a" href="#about">
                <DownIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </section>
      <AsyncAbout classes={classes} ReactGA={ReactGA} />
      <AsyncBackgroundParticles />
      <AsyncStyles />
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)

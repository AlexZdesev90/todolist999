import { Component } from 'react';
import classes from './ThemeSwitcher.module.css';
import { HiMoon, HiOutlineSun } from 'react-icons/hi';
import ThemeContext from '../../context/ThemeContext';

export class ThemeSwitcher extends Component {
  render() {
    const { darkTheme, changeTheme } = this.context;
    return (
      <div className={classes.theme} {...this.props} onClick={() => changeTheme()}>
        {darkTheme === true ? (
          <HiMoon className={classes.icon} />
        ) : (
          <HiOutlineSun className={classes.icon} />
        )}
      </div>
    );
  }
}

ThemeSwitcher.contextType = ThemeContext;
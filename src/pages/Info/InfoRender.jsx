import React from 'react';
import classes from '../Info/Info.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const InfoRender = (props) => {
  const { darkTheme } = props;
  return (
    <div
      className={[classes.base, `${darkTheme ? classes.wrapperDark : classes.wrapper}`].join(' ')}
    >
      <div className={darkTheme ? classes.darkheader : classes.header}></div>
      <h2>What is a ToDo List?</h2>
      <p>
        What is a ToDo List? The definition is a simple one. It’s a list of tasks you need to
        complete or things that you want to do. Most typically, they’re organised in order of
        priority. Traditionally, they’re written on a piece of paper or post it notes and act as a
        memory aid. As technology has evolved we have been able to create a todo lists with excel
        spreadsheets, word documents, email lists, todo list apps, Microsoft to do and google to do
        list to name a few. You can use a to do list in your home and personal life, or in the
        workplace. Having a list of everything you need to do written down in one place means you
        shouldn’t forget anything important. By prioritising the tasks in the list you plan the
        order in which you’re going to do them and can quickly see what needs your immediate
        attention and what tasks you can leave until a little later.
      </p>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};

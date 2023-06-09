import { Component } from 'react';
import classes from '../Item/Item.module.css';
import { motion } from 'framer-motion';
import { RiEditFill, RiDeleteBin3Fill } from 'react-icons/ri';
import { GiConfirmed } from 'react-icons/gi';
import { MdDoneOutline, MdRemoveDone } from 'react-icons/md';
import { TiInfoLarge } from 'react-icons/ti';
import { RxArchive } from 'react-icons/rx';
import { Button } from '../Button';
import { EditModal } from '../EditModal/EditModal';

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editTitleValue: this.props.title,
      editDescriptionValue: this.props.description,
      info: false,
    };
  }

  getDate = (date) => {
    const data = new Date(date);
    const year = data.getFullYear();
    const month = data.getMonth();
    const day = data.getDate();
    const hours = data.getHours();
    const mins = data.getMinutes();
    const secs = data.getSeconds();
    return `${year}/${month + 1}/${day} ${hours}h:${mins}m:${secs}s `;
  };

  showInfo = (date) => {
    this.setState(({ info }) => ({ info: !info }));
    this.getDate(date);
  };

  editHandlier = (title, description, id) => {
    this.setState({ editTitleValue: title });
    this.setState({ editDescriptionValue: description });
    const items = JSON.parse(localStorage.getItem('items'));
    const newItems = items.map(
      (item) =>
        (item = item.id === id ? { ...item, title: title, description: description } : item),
    );
    localStorage.setItem('init', JSON.stringify(newItems));
    localStorage.setItem('items', JSON.stringify(newItems));
    this.setState({ edit: false });
  };

  render() {
    const { id, done, date, onClickAddInArchive } = this.props;
    return (
      <motion.div
        key={id}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={[classes.item, `${done ? classes.doneTrue : ''}`].join(' ')}
      >
        {this.state.edit ? (
          <EditModal
            editTitleValue={this.state.editTitleValue}
            editDescriptionValue={this.state.editDescriptionValue}
            onChangeTextValue={this.onChangeTextValue}
            onChangeDescriptionValue={this.onChangeDescriptionValue}
            onClickEditHandlier={this.editHandlier}
            id={id}
          />
        ) : (
          <div className={classes.wrapper}>
            <div className={classes.element}>
              Title: <span className={classes.text}>&nbsp;{this.state.editTitleValue}</span>
            </div>
            &nbsp;{' '}
            <div className={classes.element}>
              Des: <span className={classes.text}>&nbsp;{this.state.editDescriptionValue}</span>
            </div>
          </div>
        )}
        <div className={classes.flexWrapper}>
          <div>
            {window.screen.width >= 530 ? (
              <span className={classes.status}>{done ? 'completed' : 'active'}</span>
            ) : (
              ''
            )}
          </div>
          <div>
            <Button onClick={() => this.props.removeTodo(id)}>
              <RiDeleteBin3Fill />
            </Button>
            <Button onClick={() => this.setState({ edit: !this.state.edit })}>
              {this.state.edit ? <GiConfirmed /> : <RiEditFill />}
            </Button>
            <Button onClick={() => this.props.onClickDoneHandlier(id)}>
              {done ? <MdRemoveDone /> : <MdDoneOutline />}
            </Button>
            <Button onClick={() => this.showInfo(date)}>
              <TiInfoLarge />
            </Button>
            {this.state.info ? <div className={classes.info}>{this.getDate(date)}</div> : ''}
            <Button onClick={() => onClickAddInArchive(id)}>
              <RxArchive />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
}

// Task component - represents a single todo item
Task = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: {checked: ! this.props.task.checked}
    });
  },
 
  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  },

  consoleThisTask() {
    console.log(this.props);
  },
 
  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? "checked" : "";

    return (
      <li className={taskClassName}>

        <input
          type="checkbox"
          readOnly={true}
          checked={this.props.task.checked}
          onClick={this.toggleChecked} />

        <button className="console" onClick={this.consoleThisTask}>
          &amp;
        </button>

        <span className="text">{this.props.task.text}</span>

        <button className="delete" onClick={this.deleteThisTask}>
          &times;
        </button>

      </li>
    );
  }
});

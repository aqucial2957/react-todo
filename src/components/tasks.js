import React from "react";

// ToDo リストを表示する部分
class Tasks extends React.Component {
  render() {
    return (
      <ul className="tasks" style={{listStyle: "none", paddingLeft: "0"}}>
        {this.props.tasks.map(
          (task, idx) => {
            return (
              <li key={idx} className="uk-margin uk-padding-small uk-card uk-card-default uk-card-body">
                <div style={{height: "20px"}}>
                  <div style={{float: "left"}}><p>{task.due}</p></div>
                  <div style={{float: "right"}}>
                    <button type="button"
                            onClick={() => this.props.deleteItem(idx)}
                            className="uk-button uk-button-primary uk-button-small">
                      DONE!
                    </button>
                  </div>
                </div>
                <hr></hr>
                <p className="uk-card-title">{task.task}</p>
              </li>
            );
          }
        )}
      </ul>
    )
  }
}

export default Tasks;

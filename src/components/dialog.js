import React from "react";
import ReactModal from "react-modal";

// ToDo を入力するダイアログ
class Dialog extends React.Component {
  constructor() {
    super();
    ReactModal.setAppElement('body');
  }
  render() {
    return (<div>
      <ReactModal isOpen={this.props.isOpen} onRequestClose={this.props.onClose}>
        <form className="uk-form-stacked" onSubmit={this.props.onSubmit}>
          <div className="uk-margin">
            <label htmlFor="calendar" className="uk-form-label">期限</label>
            <div className="uk-form-controls">
              <input type="date" className="uk-input" id="calendar" placeholder="日付を選択..." />
            </div>
          </div>

          <div className="uk-margin">
            <label htmlFor="task" className="uk-form-margin">タスク</label>
            <div className="uk-form-controls">
              <input type="text" className="uk-input" id="task" placeholder="タスクを入力..." />
            </div>
          </div>

          <button type="submit" className="uk-button uk-button-primary">追加</button>
        </form>
      </ReactModal>
    </div>);
  }
}

export default Dialog;

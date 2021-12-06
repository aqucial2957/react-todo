import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Dialog from "./components/dialog";
import Tasks from "./components/tasks";

// main
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isDialogOpen: false,  // ダイアログが開いているかどうか
      tasks: []             // タスクのリストを格納する配列
    };
  }
  render() {
    return (
      <div>
        <Header openDialog={this.openDialog.bind(this)} />
        <div id="container" style={{marginLeft: '20px', marginRight: '20px'}}>
          <Tasks tasks={this.state.tasks} deleteItem={this.deleteItem.bind(this)} />
        </div>
        <Dialog isOpen={this.state.isDialogOpen} 
                onClose={this.closeDialog.bind(this)}
                onSubmit={this.addItem.bind(this)} />
      </div>
    );
  }

  // ダイアログを開く
  openDialog() {
    this.setState({ isDialogOpen: true });
  }
  // ダイアログを閉じる
  closeDialog() {
    this.setState({ isDialogOpen: false });
  }
  // ToDo を追加
  addItem(e) {
    e.preventDefault();
    this.state.tasks.push({
      due:  e.target.calendar.value,
      task: e.target.task.value
    })
    this.state.tasks.forEach(element => {
      for (let key in element) {
        console.log(key + ': ' + element[key]);
      }
    });
    this.closeDialog();
  }
  // ToDo を削除
  deleteItem(i) {
    this.state.tasks.splice(i, 1);
    this.setState({tasks: this.state.tasks})
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

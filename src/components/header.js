import React from "react";

// ヘッダ
class Header extends React.Component {
  render() {
    return (
      <nav className="uk-navbar-container uk-margin" uk-navbar>
        <div className="uk-navbar-left">
          <a href="#" className="uk-navbar-item uk-logo">
            To-do リスト
          </a>
          <div className="uk-navbar-item">
            <button onClick={this.props.openDialog}
                    className="uk-button uk-button-primary uk-button-small">
              タスクを追加
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

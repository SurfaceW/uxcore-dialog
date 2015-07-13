import React from 'react';
import Dialog from '../index.js';

var DialogContent = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  onChange(e) {
    this.props.onChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  },

  render() {
    return <div>
      <input onChange={this.onChange}

        value={this.state.value}/>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <div className="modal-footer">
        <button className="btn" onClick={this.props.onClose} >Close</button>
        <button className="btn" onClick={this.props.onDestroy} >destroy</button>
        <button className="btn btn-primary" onClick={this.props.handleSave}>Save changes</button>
      </div>
    </div>;
  }
});

var MyControl = React.createClass({
  getInitialState() {
    return {
      visible: false
    };
  },

  onChange(v) {
    this.dialogContentInput = v;
  },

  handleClose() {
    this.setState({
      visible: false
    });
  },

  handleDestroy() {
    this.setState({
      destroy: true
    });
  },

  handleTrigger() {
    this.setState({
      visible: true
    });

    // test rerender
    setTimeout(()=> {
      this.setState({
        visible: true
      });
    }, 100);
  },

  render() {
    if (this.state.destroy) {
      return null;
    }
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleTrigger}>show dialog</button>
      &nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={this.handleDestroy}>destroy</button>
        <Dialog
          ref='dialog'
          title= "第二个弹框"
          animation="zoom"
          maskAnimation="fade"
          visible={this.state.visible}
          onClose={this.handleClose}
          style={{width: 600}}
        >
          <DialogContent onChange={this.onChange} onClose={this.handleClose}
            onDestroy={this.handleDestroy}/>
        </Dialog>
      </div>
    );
  }
});

React.render(
  <div>
    <h2>render dialog inside component</h2>
    <MyControl/>
  </div>,
  document.getElementById('content')
);

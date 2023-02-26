import React, { Component } from 'react';
import EmojiData from './emoji.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: []
    };
  }

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.updateData();
    }
  }

  updateData() {
    const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(this.state.search.toLowerCase()));
    this.setState({ data: newData });
  }

  render() {
    return (
      <div>
        <center>
          <h1>🤗Emoji Search🤗</h1>
          <input size="30" type="text" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} />
        </center>
        {this.state.data.map(emoji => (
          <div className="card" key={emoji.title}>
            <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
              {emoji.symbol} {emoji.title}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
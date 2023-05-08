import React, { Component } from "react";
import Terminal from "terminal-in-react";
import "./App.css";

async function process(cmd) {
  console.log(cmd);
  const response = await fetch(`http://127.0.0.1:5000/${cmd}`);
  const data = await response.json();
  console.log(data);
}

class App extends Component {
  componentWillMount(){
    let cmd = 'run-container'
    process(cmd);
  }
  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <div className="logo">Docker in Browser</div>
          </div>
        </header>
        <div className="main_wrapper">
          <div className="container">
            <main>
              <div className="terminal">
                <Terminal
                  color="#EF8354"
                  allowTabs={false}
                  backgroundColor="#fafafa"
                  barColor="#BFC0C0"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1em"
                  }}
                  promptSymbol={"docker@exec:~$ "}
                  commandPassThrough={(cmd, print) => {
                    process(`/exec-into-container/${cmd}`);
                    print(`-PassedThrough:${cmd}`);
                  }}
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const logoOptions = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };
    const title = "こんにちはReact";
    const targets = ["World", "Kanae", "Yukina"];

    return (
      <div className="App">
        <header className="App-header">

          {/* オブジェクトに格納されたタグ属性値をまとめて渡す */}
          <img {...logoOptions} alt="test"/>

          {/* if文に相当、前に置いた値がtrueであれば、次に続く値が評価される */}
          {title && <p>{title}</p>}

          {/* elseを使う場合は三項演算子を使う */}
          {title ? 'foo' : 'bar'}

          {/* コレクションの繰り返し処理 */}
          {targets.map(target => (
            <p>Hello, {target}!</p>
          ))}

          {/* 一定条件に一致するものだけを表示 */}
          {targets.filter(t => t.length >= 6).map(t => <>{t}</>)}

        </header>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CharacterList, { Character } from './CharacterList';

class App extends Component {
  render() {
    const logoOptions = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };
    const title = "こんにちはReact";
    const targets = ["World", "Kanae", "Yukina"];

    
    // キャラクター一覧
    const characters: Character[] = [
      {
        id: 1,
        name: '羽咲 綾乃',
        age: 16,
        height: 151,
      },
      {
        id: 2,
        name: '荒垣 なぎさ',
        age: 18,
        height: 174,
      },
      {
        id: 3,
        name: '泉 理子',
        age: 18,
      },
    ]

    return (
      <div className="App">
        
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


        {/* オブジェクトをpropsとして子コンポーネントに渡す */}
        <CharacterList school="北小町高校" characters={characters} />

      </div>
    )
  }
}

export default App;

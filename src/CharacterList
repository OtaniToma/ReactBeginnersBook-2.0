import React, { Component } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number; 
}

interface CharacterListProps {
  school: string; // string以外に変更すると怒られる
  characters: Character[];
}

class CharacterList extends Component<CharacterListProps> {
  // CharacterListに対する型引数　そのコンポーネントのPropsの型を指定している
  // もともとComponentクラスの型引数にはデフォルト値として{}という空のオブジェクトが設定されている
  
  render() {
    const { school, characters } = this.props; // ローカル変数として抽出　return内でいちいちthis.props.xxxと書かなくてよい

    return(
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {characters.map(c => (
            <Item key={c.id}>
              {/* ループ処理で複数のコンポーネントを生成するとき、その要素に一意なkey属性値が必要
              なくても動くが、パフォーマンス向上に大事なので警告が出る */}
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{c.name}</Item.Header>
                <Item.Header>{c.age}歳</Item.Header>
                <Item.Meta>
                  {c.height ? c.height : '???'} cm
                  {/* ?とは「この要素は省略できる」という意味　height値が設定されていなくても怒られない */}
                </Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
  }
}

export default CharacterList;
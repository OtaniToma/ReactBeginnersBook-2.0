import React, { FC, useEffect, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const LIMIT = 60;

const EffectHook: FC = () => {
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const reset = () => {
    setTimeLeft(LIMIT);
  };

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
  };

  useEffect(() => { // 第1引数に、引数なしの関数を設定
    const timerId = setInterval(tick, 1000); // レンダリング直前に実行

    return () => clearInterval(timerId); // アンマウント時に実行
  }, []); // 第2引数は配列で指定する　変数の中身が変更されていなければsetIntervalは実行されない

  return (
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={reset}>
            <Icon name="redo" />
            Reset
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default EffectHook;
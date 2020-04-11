import React, { Component, FC } from 'react';

const Hello: FC = () => <div>Hello!</div>;

const logoProps = (WrappedComponent: FC) => {
  return class extends Component {
    componentDidMount() {
      console.log('Component is rendered.');
    }

    render() {
      return <WrappedComponent />;
    }
  };
};

// Helloコンポーネントを引数にとって、マウント時に文字列をコンソールに出力
export default logoProps(Hello);
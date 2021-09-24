import { Component } from 'react';

type NumberProps = {
  count: number;
};

type CounterProps = {
  message: string;
};

export class Counter extends Component<CounterProps, NumberProps> {
  state = {
    count: 0,
  };
  handeClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  handeClickMinus = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  handleReset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };
  render() {
    return (
      <div>
        <div className='p-4 text-white font-bold'>
          {this.props.message}
          {this.state.count}
        </div>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={this.handeClick}
        >
          Inc
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={this.handeClickMinus}
        >
          Dec
        </button>
        <button
          className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
          onClick={this.handleReset}
        >
          Reset
        </button>
      </div>
    );
  }
}

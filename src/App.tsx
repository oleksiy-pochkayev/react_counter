import React from 'react';
import './App.scss';
import './calculator.scss';

type State = {
  count: number;
  num: string;
  calcNums: [] | string[] | (number | string)[]
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
    num: '',
    calcNums: [],
  };

  equal = () => {
    this.setState((prevState) => {
      const result:(number | string)[] = [...prevState.calcNums, Number(prevState.num)];

      for (let i = 0; i < result.length; i += 1) {
        if (result[i] === '*') {
          const numb = (result[i - 1] as number) * (result[i + 1] as number);

          result.splice(i - 1, 3, numb);
          i = 0;
        } else if (result[i] === '/') {
          const numb = (result[i - 1] as number) / (result[i + 1] as number);

          result.splice(i - 1, 3, numb);
          i = 0;
        }
      }

      for (let i = 0; i < result.length; i += 1) {
        if (result[i] === '+') {
          const numb = (result[i - 1] as number) + (result[i + 1] as number);

          result.splice(i - 1, 3, numb);
          i = 0;
        } else if (result[i] === '-') {
          const numb = (result[i - 1] as number) - (result[i + 1] as number);

          result.splice(i - 1, 3, numb);
          i = 0;
        }
      }

      return {
        num: String(result[0]),
        calcNums: [],
      };
    });
  };

  clear = () => {
    this.setState({ calcNums: [], num: '' });
  };

  addition = () => {
    this.setState((prev) => ({
      calcNums: [...prev.calcNums, Number(prev.num), '+'],
      num: '',
    }));
  };

  subtraction = () => {
    this.setState((prev) => ({
      calcNums: [...prev.calcNums, Number(prev.num), '-'],
      num: '',
    }));
  };

  multiplication = () => {
    this.setState((prev) => ({
      calcNums: [...prev.calcNums, Number(prev.num), '*'],
      num: '',
    }));
  };

  division = () => {
    this.setState((prev) => ({
      calcNums: [...prev.calcNums, Number(prev.num), '/'],
      num: '',
    }));
  };

  zero = () => {
    this.setState((prev) => ({
      num: prev.num + 0,
    }));
  };

  one = () => {
    this.setState((prev) => ({
      num: prev.num + 1,
    }));
  };

  two = () => {
    this.setState((prev) => ({
      num: prev.num + 2,
    }));
  };

  three = () => {
    this.setState((prev) => ({
      num: prev.num + 3,
    }));
  };

  four = () => {
    this.setState((prev) => ({
      num: prev.num + 4,
    }));
  };

  five = () => {
    this.setState((prev) => ({
      num: prev.num + 5,
    }));
  };

  six = () => {
    this.setState((prev) => ({
      num: prev.num + 6,
    }));
  };

  seven = () => {
    this.setState((prev) => ({
      num: prev.num + 7,
    }));
  };

  eight = () => {
    this.setState((prev) => ({
      num: prev.num + 8,
    }));
  };

  nine = () => {
    this.setState((prev) => ({
      num: prev.num + 9,
    }));
  };

  addOne = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prev) => ({
      count: prev.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0 && this.state.count > 0) {
      this.add100();
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  random = () => {
    const random = Math.round(Math.random() * 100);

    this.setState((prev) => ({
      count: prev.count + random,
    }));
  };

  render() {
    const {
      count, num, calcNums,
    } = this.state;
    const isFirstEmpty = num.length !== 0;
    const isNumEmpty = num.length === 0;

    return (
      <div className="app">
        <div className="calculator">
          <div className="calculator__display">
            <div className="calculator__numbers">
              {calcNums.map((item) => (
                `${item} `
              ))}
              {num}
            </div>
          </div>

          <div className="calculator__buttons">
            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.seven();
              }}
            >
              7
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.eight();
              }}
            >
              8
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.nine();
              }}
            >
              9
            </button>

            <button
              className="app__button"
              type="button"
              disabled={!isFirstEmpty}
              onClick={() => {
                this.division();
              }}
            >
              ÷
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.four();
              }}
            >
              4
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.five();
              }}
            >
              5
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.six();
              }}
            >
              6
            </button>

            <button
              className="app__button"
              type="button"
              disabled={!isFirstEmpty}
              onClick={() => {
                this.multiplication();
              }}
            >
              X
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.one();
              }}
            >
              1
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.two();
              }}
            >
              2
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.three();
              }}
            >
              3
            </button>

            <button
              className="app__button"
              type="button"
              disabled={!isFirstEmpty}
              onClick={() => {
                this.subtraction();
              }}
            >
              -
            </button>

            <button
              className="app__button"
              type="button"
              disabled={isNumEmpty}
              onClick={() => {
                this.zero();
              }}
            >
              0
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.clear();
              }}
            >
              C
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.equal();
              }}
            >
              =
            </button>

            <button
              className="app__button"
              type="button"
              disabled={!isFirstEmpty}
              onClick={() => {
                this.addition();
              }}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <h1 className="app__numbers">
            Count:
            {' '}
            { count }
          </h1>

          <div className="app__buttons">
            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.addOne();
              }}
            >
              +1
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.add100();
              }}
            >
              +100
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.increase();
              }}
            >
              Increase
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.random();
              }}
            >
              Random
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => {
                this.reset();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

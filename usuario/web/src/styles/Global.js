import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
  background-color: #f6f7fd;
}
input {
    margin-top: 20px;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 16px;
    padding: 0 20px;
    height: 48px;
    color: #000;
  }

  button {
    width: 60px;
    margin-left: 10px;
    margin-top: 20px;
    border: 0;
    border-radius: 4px;
    height: 48px;
    font-size: 16px;
    background: #df4723;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }



`;

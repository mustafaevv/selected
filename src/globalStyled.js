const { createGlobalStyle } = require("styled-components");

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Manrope', sans-serif;
  }
  button{
    background: #2f97ff;
  }
  h1{
    color: #fff;
  }
  input{
    border: 1px solid #fff;
    border-radius: 8px;
    background: none;
  }
  h2,
  h3{
    color: #092433;
  }
  ul{
    list-style: none;
  }
`

export default GlobalStyled
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
  h2,
  h3{
    color: #092433;
  }
  ul{
    list-style: none;
  }
`

export default GlobalStyled
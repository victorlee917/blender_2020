import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset};

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
}

::selection {
   background: rgba(255, 255, 255, 1);
}


a{
    text-decoration:none;
    color:inherit

}

*{
    box-sizing:border-box;
}

button {
    outline: none;
border: none;
}

input {
    border: none;
    outline: none;
}

textarea {
    border:none;
    outline:none;
    resize: none;
    &:focus {
        border:none;
        outline:none;
    }
}

body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    background-color:rgba(0,0,0,1.0);
    color: rgba(255, 255, 255, 1);
    overflow-x: hidden;
}

.dD{
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

input[type=radio]:checked + label {
  opacity: 1;
} 

/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,.3);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,.3);
}

@keyframes pulse {
  0% {
    background-color: #6927ff;
  }
  20% {
    background-color: #837dff;
  }
  40% {
    background-color: #bf81ff;
  }
  60% {
    background-color: #ffd581;
  }
  80% {
    background-color: #001F3F;
  }
  100% {
    background-color: #ffffff;
  }
}

@keyframes bounce-2 {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }

`;

export default globalStyles;

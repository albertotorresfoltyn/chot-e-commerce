import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  

    .maxWidth150{
        max-width: 150px;
        
        }
        
        .center {
          align-content: center;
          align-items: center;
          align-self: center;
        }
        
        .reverse {
          flex-direction: row-reverse;
        }
        
        .titleClass{
        
          font-family: "Arial", Gadget, sans-serif;
            font-size: 5rem;
            letter-spacing: 10px;
            font-weight: 700;
            text-decoration: none;
            font-style: normal;
            font-variant: small-caps;
            font-feature-settings: normal;
        
        }
        
        .backColorLigthGray {
          background-color: #ededed;
        
        
        }
        
        .caps {
          font-variant: small-caps;
        }
        
        .deep-celeste{
          background-color: lightseagreen
        }
        
        .hrWhite {
          border-top: 5px solid rgba(255, 255, 255, 0);
          background-color: white;
        }
        
        .jumboHead {
         padding: 15px !important;
         background-color: #3e4551 !important;
        }
        #ShopContainer .card {
          min-height: 350px;
            max-height: 350px;
        }
        .card > .view{
         height: 150px;
        }
        
        .priceStyle{
          color: gray;
          font-size: 2.6rem;
        }
        
        .mitadwidth{
          width: 50%;
        }
        
        .maxWidth300{
          max-width: 300px;
        
        
        }
        

`;

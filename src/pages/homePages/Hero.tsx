// import React from 'react'

import { styled } from "styled-components";
import bg from "../../assets/Jpegs/opti2.jpg";
import Typewriter from "typewriter-effect";
// import image from "../../assets/left2.png"

const Hero = () => {
  return (
    <div>

      <Herro>

        <Black></Black>

        <HerroHold>

          <HerroLeft>

          <Create>
            BUILDING HOPE <br />
            <span>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter: any) => {
                  typewriter

                    .typeString("UPLIFTING COMMUNITIES..")
                    .pauseFor(1500)
                    .deleteAll()

                    .typeString("ONE LIFE AT A TIME..")
                    .pauseFor(1500)
                    .deleteAll()

                    // .typeString("Emergency Hero...")
                    // .pauseFor(1500)
                    // .deleteAll()
                    .start();
                }}
              />
            </span>
          </Create>
          
          <Life>Life is too short.. Give when you can..</Life>

          <Button>Become A Partner</Button>

          </HerroLeft>

          {/* <HerroRight> */}

            {/* <Box1></Box1>
            <Box2></Box2>
            <Box3></Box3>
            <Box4></Box4> */}

            {/* <LeftImg src={image} /> */}

          {/* </HerroRight> */}

        </HerroHold>

      </Herro>

    </div>
  )
}

export default Hero;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const LeftImg = styled.img`
// width: 1000px;
// // height: 80%;
// `;

// const Box4 = styled.div`
// position: absolute;
// width: 220px;
// height: 220px;
// border: 1px solid gray;
// border-radius: 20px;
// transform: rotate(45deg);
// `;

// const Box3 = styled.div`
// position: absolute;
// width: 220px;
// height: 220px;
// border: 1px solid gray;
// border-radius: 20px;
// transform: rotate(45deg);
// `;

// const Box2 = styled.div`
// position: absolute;
// width: 220px;
// height: 220px;
// border: 1px solid gray;
// border-radius: 20px;
// transform: rotate(45deg);
// `;

// const Box1 = styled.div`
// position: absolute;
// width: 220px;
// height: 220px;
// border: 1px solid gray;
// border-radius: 20px;
// transform: rotate(45deg);
// top: 100px;

// `;

// const HerroRight = styled.div`
// width: 50%;
// height: 100%;
// display: flex;
// justify-content: center;
// align-items: center;
// // position: relative;
// `;

// const Head = styled.div``;

// const Head = styled.div``;

const Button = styled.button`
padding: 15px 25px;
font-weight: 700;
border-radius: 7px;
margin-top: 30px;
// background: #1A395B;
background: #1c15e7;
color: white;
cursor: pointer;
border: none;

&:hover{
  // background: #297841;
  background:  rgb(234, 173, 60);
}
`;

const Life = styled.div`
font-size: 17px;
margin-top: 10px;
// color: rgb(24,24,100);
color: #e5e1e1fb;
`;

const Create = styled.div`
font-size: 55px;
font-weight: 700;
color: white;
`;

const HerroLeft = styled.div`
z-index: 10;
`;

const HerroHold = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Black = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-image: linear-gradient(45deg, #000000, #332e2e );
opacity: 0.5;
left: 0;
top: 0;
`;

const Herro = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${bg});
background-size: cover;
position: relatiive;
overflow: hidden;
`;
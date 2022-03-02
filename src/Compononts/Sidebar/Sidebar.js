import React from "react";
import styled from "styled-components";
import logo from './logo.png';
import home from './Group1.png';
import calck from './kalkulator.png';
import set from './setting.png';
import Pay from './Payment.png';
import human from './humans.png';
import nastroy from './nastroy.png';

const Sidebar=()=>{
    return(

        <>
        <SidebarConatiner>
            <Topsidebar>
                <Sidbarlinks><img src={logo} alt="logo" /><Current><ion-icon name="play-back-sharp"></ion-icon></Current><Angle></Angle></Sidbarlinks>
                <Sidbarlinks><img src={home} alt="home"/>ACADEMY</Sidbarlinks>
                <Sidbarlinks><img src={calck} alt="kalk"/>ACCOUNT</Sidbarlinks>
                <Sidbarlinks><img src={set} alt="set"/>SALES</Sidbarlinks>
                <Sidbarlinks><img src={Pay} alt="pay"/>MARKETING</Sidbarlinks>
                <Sidbarlinks><img src={human} alt="human"/>HUMANS</Sidbarlinks>
            </Topsidebar>
            
            <BottomSidebar>
                <BottomLink><img src={nastroy} alt="nastroy"/>SETTINGS</BottomLink>
                <Forward><ion-icon name="chevron-forward"></ion-icon></Forward>
            </BottomSidebar>
           
        </SidebarConatiner>
        
        </>

    );
}
const Forward=styled.div`
color:white;
font-size: 16px;
`
const Topsidebar=styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const BottomSidebar=styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
/* background-color: red; */
position: relative;
/* top:200px; */
flex-direction: column;
`

const BottomLink=styled.div`
display:flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
color: white;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
text-align: center;
margin-bottom: 3rem;
position: relative;
`

const Angle=styled.div`
 width: 0; 
  height: 0; 
  border-top: 45px solid transparent;
  border-bottom: 45px solid transparent;
  position: absolute;
  top:-23px;
  right: -43px;
  /* border-left: 45px solid red; */
  box-sizing: border-box;
  border-left: 45px solid #23262F;
  border-radius: 10px;
 
/* transform: translate(44px, -3px) rotate(45deg); */
`
const Current=styled.div`
 color:#00B533;
  font-size: 16px;
width: 45px;
height: 45px;
background-color:#23262F;
position: absolute;
color:#00B533;
border-radius: 50%;
right: -55px;
box-sizing: border-box;
z-index: 1;
display:flex;
align-items: center;
justify-content: center;

`
const Sidbarlinks=styled.a`
display:flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
color: white;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
text-align: center;
margin-bottom: 3rem;
position: relative;
`
const SidebarConatiner=styled.div`
width: 100%;
height: 100%;
position: relative;
background-color: #23262F;
box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
border-radius: 0px;
padding: 1rem;
display: flex;
align-items: center;
box-sizing: border-box;
/* justify-content: ; */
flex-direction: column;
`




export default Sidebar;
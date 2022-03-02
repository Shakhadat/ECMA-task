import React from "react";
import styled from "styled-components";
import trash from './trashbin.png';
import modulsign from './modul.png';


const SlectedModul=()=>{
    return(
        <>
        <SelectedCourse>
            
            <Title><Img src={modulsign} alt="modul"/>    Java Backend</Title>
            <Trashconainer>
            <img src={trash} alt="trash"/>
            </Trashconainer>
            
        </SelectedCourse>
        </>
    );
}

const SpecializationAdding=()=>{
    return(
        <>
         <TotalContainer2>
        <FormSpercilalist>
           <Label>Specialization</Label>
           <Input type="text"></Input>

           <Label>Description</Label>
           <Input2 type="text"></Input2>

           <SlectedModul/>
        </FormSpercilalist>
      
        {/* <Nofoundtext>INFO NO FOUND</Nofoundtext> */}

        <FootSelected>
            <Clearbtn>Clear all</Clearbtn>
        </FootSelected>
        </TotalContainer2>

        </>
    );
}

export default SpecializationAdding;


//styling
const FootSelected=styled.div`
width: 100%;
height: 60px;
background:  #FCFCFD;
border-radius: 0px 0px 10px 10px;
position:absolute;
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: flex-end;
`
const Clearbtn=styled.button`
margin: 1rem;
cursor: pointer;
width: 91px;
height: 40px;
background: rgba(55, 114, 255, 0.1);
/* opacity: 0.1; */
border-radius: 8px;
border:none;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color:rgba(55, 114, 255, 1);

`


const Img=styled.img`margin-right:1rem`
const Title=styled.h4`
width: 70%;
height: 24px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #353945;
display: flex;
align-items:  center;
justify-content: flex-start;

`
const Trashconainer=styled.div`
width: 32px;
display: flex;
align-items: center;
justify-content: center;
height: 32px;
border-radius: 8px;
/* padding: 1rem; */
background: rgba(239, 70, 111, 0.1);
`


const SelectedCourse=styled.div`
/* width: 814px; */
width: 100%;
height: 50px;
background: #FCFCFD;
border-radius: 8px;
display: flex;
align-items: center;
justify-content:space-between;
padding:0 1rem;
box-sizing: border-box;
position: relative;
`
const Input=styled.input`
/* width: 814px; */
width: 100%;
height: 50px;
background: #FCFCFD;
border: 1px solid #E6E8EC;
box-sizing: border-box;
border-radius: 10px;
margin:1rem 0;
outline: none;
`
const Input2=styled.input`
/* width: 814px; */
width: 100%;
height: 100px;
background: #FCFCFD;
border: 1px solid #E6E8EC;
box-sizing: border-box;
border-radius: 10px;
margin:1rem 0;
outline: none;
`


const FormSpercilalist=styled.form`
width: 95%;
/* width: 816px; */
padding: 1rem;
/* background-color: yellow; */
`
const TotalContainer2=styled.div`
position: relative;
/* width:862px; */
width: 100%;
height: 100vh;
/* height: 880px;
 */
background-color:#FFFFFF;
margin: 1rem;
/* padding: 1rem; */
box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.2);
border-radius: 10px;`

const Nofoundtext=styled.h1`
width: 184px;
height: 36px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 36px;
color: #B1B5C4;
text-align: center;
position: relative;
top: 40%;
left: 40%;`

const Label=styled.label`
width: 96px;
height: 12px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 12px;
display: flex;
align-items: center;
text-transform: uppercase;
color: #777E91;
`
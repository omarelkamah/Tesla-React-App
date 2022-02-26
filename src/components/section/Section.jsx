import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const SectionItem = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: ${props => `url("/images/${props.backgroundImg}")`};
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const SectionItemTop = styled.div`
    text-align: center;
`

const SectionItemBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Heading = styled.h2`
    margin: 0;
    margin-top: 40px;
    text-transform: uppercase;
`

const Desc = styled.p`
    text-transform: capitalize;
`
const Buttons = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 798px) {
        flex-direction: column;
    }
`
const ButtonLeft = styled.button`
    padding: 15px 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 100px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: 15px;
    min-width: 230px;
    background: rgba(23, 26, 32, 0.8);
    color: white;
    margin-bottom: 20px;
    transition: .3s;

    :hover {
        background: rgba(23, 26, 32, 1);
    }
`
const ButtonRight = styled(ButtonLeft)`
    background: white;
    color: black;
    opacity: .8;
    :hover {
        background: white;
        opacity: 1
    }
`

const Arrow = styled.img`
    width: 40px;
    object-fit: cover;
    cursor: pointer;
    animation: arrowAnimation 1.5s ease infinite;
`


function Section({ id, title, description, backgroundImg, leftBtnText, rightBtnText , arrow}) {
  return (
    <SectionItem id={id} backgroundImg={backgroundImg}>
        <Fade bottom>
        <SectionItemTop>
            <Heading>{title}</Heading>
            <Desc>{description}</Desc>
        </SectionItemTop>
        </Fade>
        <SectionItemBottom>
            <Fade bottom>
                <Buttons>
                    <ButtonLeft>{leftBtnText}</ButtonLeft>
                    {rightBtnText && <ButtonRight>{rightBtnText}</ButtonRight>}
                </Buttons>
            </Fade>
            {arrow && <Arrow src="/images/down-arrow.svg" />}
        </SectionItemBottom>
    </SectionItem>
  )
}

export default Section
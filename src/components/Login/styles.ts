import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  @media(max-width: 1200px) {
    flex-direction: column;    
  } 
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  padding: 2rem;
  background-color: #f5f5f5;

  @media(max-width: 1200px) {
    max-width: 100%;
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 200;
  color: #343a40;
  letter-spacing: 2px;
`;

export const TabMenu = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 3rem;
`;

export const TabItem = styled.a`
color: #0054a6;
text-decoration: none;
font-size: 13px;
opacity: .5;
border-bottom: 2px solid transparent;
cursor: pointer;

&:hover {
  border-bottom: 2px solid #0054a6;
}

&.active {
  border-bottom: 2px solid #0054a6;
  opacity: .9;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
`;

export const Inputs = styled.div`
display: flex;
border-bottom: 1px solid #999;


img {
  width: 20px;
  margin-bottom: -3px;
}
`;

export const Input = styled.input`
  padding: 1rem;  
  background-color: transparent;
  border: none;
  font-size: 1rem;
  width: 100%;

  &::placeholder {
    color: #999;
    font-size: 1.2rem;
  }
`;

export const CheckboxContainer = styled.div`
display: flex;
align-items: center;
margin-top: 1rem;
margin-bottom: 1rem;

input[type="checkbox"] {
  margin-right: 0.5rem;
  width: 1.3rem;
  height: 1.3rem;
}

label {
  margin-right: 360px;  
}

@media(max-width: 425px) {
  label {
    margin-right: 0;
  }
}
`;

export const SubmitButton = styled.button`
padding: 1rem;
background-color: transparent;
color: #CCC;
border: 1px solid #CCC;
border-radius: 50px;
font-size: 1rem;
margin-top: 1rem;
margin-bottom: 1rem;
letter-spacing: 1px;
cursor: pointer;
`;

export const Link = styled.a`
color: #0054a6;
text-decoration: none;
cursor: pointer;
`;

export const FooterLeft = styled.footer`
  p {
    margin-top: 22rem;
    color: #CCC;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  @media(max-width: 1200px) {
    p {
      margin-top: 1rem;
      display: none;
    }
  }
`;

export const RightSide = styled.div`
  flex: 1;
  background-color: #0054a6;
  color: white;
  padding-left: 7rem;
  display: flex;
  flex-direction: column;  

  @media(max-width: 425px) {
    padding-left: 2rem;    
  }
`;

export const MenuTop = styled.ul`
  display: flex;
  gap: 3rem;
  padding-top: 2rem;
`;

export const MenuItem = styled.li`
  list-style: none;
  font-size: 1.2rem;
  font-weight: 600;
  
  a {
    text-decoration: none;
    color: white;
  }
`;

export const InfoSection = styled.div`
  margin-top: 7rem;    
`;

export const InfoItem = styled.div`
  display: flex;  
  gap: 2rem;
  border-bottom: 1px solid #CCC;

  img {
    height: 40px;
    width: 40px;    
  }

  @media(max-width: 1200px) {
    padding-bottom: 2rem;
  }
`;

export const ContainerBar = styled.div`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const InfoItemBar = styled.div`
  margin-top: -9px;

  h2 {
    font-weight: 100;
  }

  @media(max-width: 1200px) {
    width: 300px;
  }
`;

export const Arrow = styled.div`
  margin-left: 350px;
  
  img {
    width: 50px;
    height: 50px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -8px;  
`;

export const Woman = styled.div`
  margin-left: 300px;
  margin-top: -100px;
  
  img {
    width: 300px;
    height: 330px;    
  }

  @media(max-width: 1200px) {
    display: none;
  }
`;

export const InfoSubItem = styled.div`
  width: 15rem;
  
  h2 {
    font-weight: 300;
    letter-spacing: 1px;
  }
`;

export const AppLinks = styled.div`
  margin-top: 2rem;

  img {
    width: 100px;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export const FooterRight = styled.footer`
  margin-top: auto;  
  padding: 1rem 0;

  @media(max-width: 425px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 3rem;
`;

export const Li = styled.li`
  list-style: none;
  font-size: 1rem;
  
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: #FFF; 
    opacity: 0.4;
  }
`;
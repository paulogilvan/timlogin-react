import * as C from './styles';
import Logo from '../../assets/logo-default.svg';
import Phone from '../../assets/phone.svg';
import Padlock from '../../assets/padlock.svg';
import LogoTim from '../../assets/logo-tim.svg';
import Apple from '../../assets/btn-apple-store.svg';
import Google from '../../assets/btn-google-play.svg';
import Woman from '../../assets/woman.png';
import BarCode from '../../assets/barcode.svg';
import ArrowRight from '../../assets/arrow-right.svg';
import Doubts from '../../assets/doubts.svg';

export const Login = () => {
  return (
    <C.Container>
      <C.LeftSide>
        <C.Logo src={Logo} alt="logo" />
        <C.Title>Entrar</C.Title>
        <C.TabMenu>
          <C.TabItem className="active">PARA VOCÊ</C.TabItem>
          <C.TabItem>PARA EMPRESAS</C.TabItem>
          <C.TabItem>TIM ULTRAFIBRA</C.TabItem>
          <C.TabItem>TIM CARRO CONECTADO</C.TabItem>
        </C.TabMenu>
        <C.Form>
          <C.Inputs>
            <img src={Phone} alt="phone" />
            <C.Input type="text" placeholder="DDD + Número da TIM" />            
          </C.Inputs>
          <C.Inputs>
            <img src={Padlock} alt="padlock" />
            <C.Input type="password" placeholder="Senha de 4 números" />
          </C.Inputs>
          <C.CheckboxContainer>
            <input type="checkbox" id="keepLoggedIn" />
            <label htmlFor="keepLoggedIn">Manter-me conectado</label>
            <C.Link href="#">Não sei minha senha</C.Link>
          </C.CheckboxContainer>
          <C.SubmitButton type="submit">Entrar agora</C.SubmitButton>
        </C.Form>
        <C.Link href="#">É um Cliente cancelado? Clique aqui para fazer login.</C.Link>   
        <C.FooterLeft>
          <p>Copyright TIM Celular 2015 - Todos direitos reservados.</p>
        </C.FooterLeft>
      </C.LeftSide>
      <C.RightSide>
        <C.MenuTop>
          <C.MenuItem>
            <a href="#">Portal da TIM</a>
          </C.MenuItem>
          <C.MenuItem>
            <a href="#">Loja online</a>
          </C.MenuItem>
        </C.MenuTop>
        <C.InfoSection>
          <C.InfoItem>
            <img src={LogoTim} alt="logo-tim" />
            <C.ContainerInfo>
              <C.InfoSubItem>
                <h2>Baixe o app Meu TIM</h2>
                <p>Acompanhe seu consumo, baixe faturas, mude para débito automático, faça recarga e muito mais.</p>
                <C.AppLinks>
                <img src={Apple} alt="App Store" />
                <img src={Google} alt="Google Play" />
                </C.AppLinks> 
              </C.InfoSubItem>              
            </C.ContainerInfo>
            <C.Woman>
              <img src={Woman} alt="woman" />
            </C.Woman>           
          </C.InfoItem>
          <C.InfoItem>
            <C.ContainerBar>
                <img src={BarCode} alt="bar code" />
                <C.InfoItemBar>
                <h2>Pague com código de barras</h2>
                <p>Receba o código de barras das suas contas em aberto via SMS.</p>              
                </C.InfoItemBar>
                <C.Arrow>
                  <img src={ArrowRight} alt="arrow" />
                </C.Arrow>
              </C.ContainerBar>
          </C.InfoItem>
          <C.InfoItem>
            <C.ContainerBar>
              <img src={Doubts} alt="doubts" />
              <C.InfoItemBar>
              <h2>Dúvidas de acesso?</h2>
              <p>Veja as respostas para a dúvidas mais frequentes sobre acesso.</p>
              </C.InfoItemBar>
              <C.Arrow>
                <img src={ArrowRight} alt="arrow" />
              </C.Arrow>
            </C.ContainerBar>
          </C.InfoItem>
        </C.InfoSection>
        <C.FooterRight>
          <C.Ul>
            <C.Li>
              <a href="#">Institucional</a>
            </C.Li>
            <C.Li>
              <a href="#">Guia de aparelhos</a>
            </C.Li>
            <C.Li>
              <a href="#">Cobertura</a>
            </C.Li>
            <C.Li>
              <a href="#">Atendimento</a>
            </C.Li>
          </C.Ul>
        </C.FooterRight>
      </C.RightSide>
    </C.Container>
  );
}
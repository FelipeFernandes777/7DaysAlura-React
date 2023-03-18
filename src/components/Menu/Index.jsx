import Link from "../Links";
import MenuLink from "../MenuLinks";
import logo from "../../assets/Header/logo.png";

import { ContainerMenu } from "./styles.js";

export default function Menu() {
  return (
    <ContainerMenu>
      <div>
        <img src={logo} alt="Logo Casa Verde" />
      </div>
      <MenuLink>
        <Link url="#">Como fazer</Link>
        <Link url="#">Ofertas</Link>
        <Link url="#">Depoimentos</Link>
        <Link url="#">Videos</Link>
        <Link bar={false} url="#">
          Meu carrinho
        </Link>
      </MenuLink>
    </ContainerMenu>
  );
}

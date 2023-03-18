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
        <Link>Como fazer</Link>
        <Link>Ofertas</Link>
        <Link>Depoimentos</Link>
        <Link>Videos</Link>
        <Link bar={false}>Meu carrinho</Link>
      </MenuLink>
    </ContainerMenu>
  );
}

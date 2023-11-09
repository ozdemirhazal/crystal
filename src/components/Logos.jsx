import AudiLogo from "../images/logos/audilogo.png";
import BmwLogo from "../images/logos/bmwlogo.png";
import FordLogo from "../images/logos/fordlogo.png";
import PegoLogo from "../images/logos/pegologo.png";
import MercedesLogo from "../images/logos/mercedeslogo.png";
import KiaLogo from "../images/logos/kialogo.png";
import RenaultLogo from "../images/logos/renaultlogo.png";
import VwLogo from "../images/logos/vwlogo.png";

const logos = [
  { id: 1, src: AudiLogo },
  { id: 2, src: BmwLogo },
  { id: 3, src: FordLogo },
  { id: 4, src: PegoLogo },
  { id: 5, src: MercedesLogo },
  { id: 6, src: KiaLogo },
  { id: 7, src: RenaultLogo },
  { id: 8, src: VwLogo },
];

function GetLogos() {
  return logos;
}

export default GetLogos;

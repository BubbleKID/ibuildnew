import { Dispatch, SetStateAction } from "react";
import './Header.sass';

interface HeaderProp {
  menuItems: IMenuItem[];
  setCategory: Dispatch<SetStateAction<number>>;
}

interface IMenuItem {
  name: string;
  category: number;
}

const Header: React.FC<HeaderProp> = (props: HeaderProp) => {
  return <div className="header">
    <h2>Top Property & Industry News</h2>
    <div className="header__description">Read hundreds of articles on home building & investments</div>
    <div className="header__container">
      {
        props.menuItems.map((item, index) => <div className="header__container" key={index + item.name}>
          <span onClick={() => props.setCategory(item.category)}>{item.name}</span>          
          {
            (props.menuItems.length === index + 1) ? <div className="header__divider--last"></div> 
            : <div className="header__divider"></div>
          }
        </div>)
      }
    </div>
    
  </div>
}

export default Header;
import { BulbOutlined, FilterOutlined } from '@ant-design/icons';
// components
import { Button, Drawer, Input, Select } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ICategory } from 'src/pages/catalog/interface';
import { changeRootCss, isMobile } from 'src/utils/utils';

import style from './styles.module.scss';

const { Search } = Input;

interface Iprops {
  avaliableCategories: Array<ICategory>;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
}

export default function Header({ avaliableCategories, setCurrentCategory }: Iprops) {
  const [isOpenMenu, setMenuOpen] = useState(false);
  const [isOpenFilters, setOpenFilters] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const handleCategoryChange = (value: string) => {
    setCurrentCategory(value);
  };
  const handleFiltersOpen = () => {
    setOpenFilters(!isOpenFilters);
  };
  interface IThemeCOnfig {
    dark: {
      '--color-content-bg': string;
      '--color-font': string;
      '--color-decorative': string;
      '--shadow': string;
    };
    light: {
      '--color-content-bg': string;
      '--color-font': string;
      '--color-decorative-dark': string;
    };
  }
  const themesConfig: IThemeCOnfig = {
    dark: {
      '--color-content-bg': '#282828',
      '--color-font': '#ffffff',
      '--color-decorative': '#ffffff',
      '--shadow': 'none'
    },
    light: {
      '--color-content-bg': '#FFF',
      '--color-font': '#1b1919',
      '--color-decorative-dark': '#1b1919'
    }
  };
  function setDarkThemeHandler() {
    if (!isDarkTheme) {
      for (const [key, value] of Object.entries(themesConfig.dark)) {
        changeRootCss(key, value);
      }
      setDarkTheme(true);
    } else {
      for (const [key, value] of Object.entries(themesConfig.light)) {
        changeRootCss(key, value);
      }
      setDarkTheme(false);
    }
  }

  const showDrawer = () => {
    setMenuOpen(true);
  };

  const onClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className={style.header}>
      <div className={style.upperBar}>
        <div className={style.search}>
          <Search placeholder="search" type="text" />
        </div>
        <div onClick={showDrawer} className={`${isOpenMenu ? style.burgerOpened : ''} ${style.burger}`}>
          <div className={style.line}></div>
        </div>
        <nav className={style.navLinksDesktop}>
          <NavLink onClick={onClose} className={style.link} to="/catalog">
            Catalog
          </NavLink>
          <NavLink onClick={onClose} className={style.link} to="/basket">
            Basket
          </NavLink>
          <NavLink onClick={onClose} className={style.link} to="/profile">
            Profile
          </NavLink>
        </nav>
        <Drawer onClose={onClose} open={isOpenMenu} title="Menu">
          <nav className={style.navLinksMobile}>
            <NavLink onClick={onClose} className={style.link} to="/catalog">
              Catalog
            </NavLink>
            <NavLink onClick={onClose} className={style.link} to="/basket">
              Basket
            </NavLink>
            <NavLink onClick={onClose} className={style.link} to="/profile">
              Profile
            </NavLink>
          </nav>
        </Drawer>
      </div>
      <div className={style.lowerBar}>
        {isMobile() && (
          <Select
            className={style.select}
            onChange={handleCategoryChange}
            style={{ minWidth: '70px', fontWeight: 'bold' }}
            bordered={false}
            defaultValue="categories"
            options={avaliableCategories}
          />
        )}
        <div className={style.buttons}>
          <div onClick={setDarkThemeHandler} className={style.themeBtn}>
            <BulbOutlined size={32} />
            {!isMobile() && <span style={{ marginLeft: '5px', fontSize: '13px' }}>Theme change</span>}
          </div>
          <Button
            onClick={() => handleFiltersOpen()}
            ghost
            className={style.filterBtn}
            type="primary"
            icon={<FilterOutlined />}
            size={'small'}
          >
            Filters
          </Button>
        </div>
        <div className={`${isOpenFilters ? style['filtersContainer--opened'] : ''} ${style.filtersContainer}`}>111111</div>
      </div>
    </header>
  );
}

import React, { FC } from 'react'
import style from './style.module.scss'
interface Props {
  header: React.ReactNode,
  main: React.ReactNode
}

const CatalogLayout: FC<Props> = ({ header, main}) => { 
  return (
    <>
      <div id="header">
        {header}
      </div>
      <main className={style.catalogContaine}>
        {main}
      </main>
    </>
  )
};

export default CatalogLayout
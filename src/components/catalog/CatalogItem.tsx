import { StarOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { IGood } from 'src/pages/catalog/Catalog';

import { currencyToRoundAndDecimial, textLimit } from '../../utils/utils';
import style from './styles.module.scss';

const CatalogItem: FC<IGood> = ({ id, image, title, price, rating }) => {
  return (
    <article className={style.productCard}>
      <div className={style.container}>
        <div className={style.img}>
          <img src={image} alt="productImage" />
        </div>
        <p className={style.description}>{textLimit(title, 25)}</p>
        <div className={style.pricing}>
          <span className={style.currency}>CZK</span>
          <span className={style.price}>{currencyToRoundAndDecimial(price).round}</span>
          <span>.</span>
          <span className={style.priceSmall}>{currencyToRoundAndDecimial(price).decimal}</span>
        </div>
        <div className={style.ratingInfo}>
          <div className={style.count}>{rating.count} sold</div>
          <div className={style.rate}>
            <StarOutlined />
            <span>{rating.rate}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CatalogItem;

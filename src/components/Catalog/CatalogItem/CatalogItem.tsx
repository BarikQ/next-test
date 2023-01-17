import Image from 'next/image'

import styles from './CatalogItem.module.scss';

export default function CatalogItem({ id, image, is_new, in_stock, price, slug, title }: any) {
  return (
    <div className='styles.item'>
      <a>
        <span>{is_new}</span>
        <img src="" alt="" />
      </a>

      <div>
        <a>
          {title}
        </a>
        
        <div>
          <span>
            {price}
          </span>

          <span>
            {is_new}
          </span>
        </div>

        <div>
          <button>В корзину</button>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  )
}
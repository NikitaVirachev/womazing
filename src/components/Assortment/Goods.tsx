import React from 'react';

type GoodsProps = {
  category: string;
};

const Goods = ({ category }: GoodsProps) => {
  return (
    <div>
      {category === 'all' && <div>Все товары</div>}
      {category === 'coats' && <div>Товары категории Пальто</div>}
      {category === 'sweatshirts' && <div>Товары категории Свитшоты</div>}
      {category === 'cardigans' && <div>Товары категории Кардиганы</div>}
      {category === 'hoodies' && <div>Товары категории Толстовки</div>}
    </div>
  );
};

export default Goods;

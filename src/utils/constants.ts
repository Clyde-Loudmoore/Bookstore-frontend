const ROUTE_PATHS = {
  HOME_PAGE: '/',
  SING_IN: '/sing-in',
  SING_UP: '/sing-up',
  PROFILE: '/profile',
  BOOKS: '/books',
  BOOK_ID: ':bookId',
  CATALOG: '/catalog',
  CART: '/cart',
  FAVORITES: '/favorites',
};

const SORT_LIST = [
  { id: 1, name: 'Price' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Author' },
  { id: 4, name: 'Rating' },
  { id: 5, name: 'Date of issue' },
];

export default {
  ROUTE_PATHS,
  SORT_LIST,
};

import { Element } from 'react-scroll';

import { useAppSelector } from 'src/store';

import FooterBanner from 'src/ui/pages/HomePage/FooterBanner';
import HeaderBanner from 'src/ui/pages/HomePage/HeaderBanner';
import Catalog from 'src/ui/pages/HomePage/Catalog';

const HomePage: React.FC = () => {
  const user = useAppSelector((store) => store.user.user);

  return (
    <main>

      {user
        ? (
          <>
            <HeaderBanner />
            <Element name="catalog">
              <Catalog />
            </Element>
          </>
        )
        : (
          <>
            <HeaderBanner />
            <Element name="catalog">
              <Catalog />
            </Element>
            <FooterBanner />
          </>
        )
      }

    </main>
  );
};

export default HomePage;

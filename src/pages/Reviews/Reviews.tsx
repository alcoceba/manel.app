import './Reviews.scss';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Headline from '../../components/Headline/Headline';
import Link from '../../components/Link/Link';

interface Review {
  title: string;
  author: string;
  url?: string;
  type: 'play' | 'book' | 'tv' | 'movie';
  favorite?: boolean;
}

interface ReviewYear {
  year: number;
  reviews: Review[];
}

const reviewsData: ReviewYear[] = [
  {
    year: 2024,
    reviews: [
      {
        title: 'The Outsider',
        author: 'Richard Wright',
        type: 'book',
        favorite: true,
      },
      {
        title: 'Poor Things',
        author: 'Yorgos Lanthimos',
        url: 'https://letterboxd.com/film/poor-things/',
        type: 'movie',
      },
      {
        title: 'Oppenheimer',
        author: 'Christopher Nolan',
        url: 'https://letterboxd.com/film/oppenheimer/',
        type: 'movie',
        favorite: true,
      },
    ],
  },
  {
    year: 2023,
    reviews: [
      {
        title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
        author: 'Francis Lawrence',
        url: 'https://letterboxd.com/film/the-hunger-games-the-ballad-of-songbirds-snakes/',
        type: 'movie',
      },
      {
        title: 'Killers of the Flower Moon',
        author: 'Martin Scorsese',
        url: 'https://letterboxd.com/film/killers-of-the-flower-moon/',
        type: 'movie',
      },
      {
        title: 'Barbie',
        author: 'Greta Gerwig',
        url: 'https://letterboxd.com/film/barbie/',
        type: 'movie',
      },
    ],
  },
];

function Reviews() {
  return (
    <div className="Reviews">
      <Headline title="Reviews" subtitle="Theatre, books, TV shows & movies" />
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Reviews' }]} />

      <section className="Reviews__section">
        <p className="Reviews__intro">
          The stories I've consumed and how I felt about them. Those marked with a star are stories I especially enjoyed.
        </p>

        {reviewsData.map((yearData) => (
          <div key={yearData.year} className="Reviews__year">
            <h2 className="Reviews__year-title">{yearData.year}</h2>
            <ul className="Reviews__list">
              {yearData.reviews.map((review, idx) => (
                <li key={idx} className={`Reviews__item ${review.favorite ? 'Reviews__item--favorite' : ''}`}>
                  {review.favorite && <span className="Reviews__favorite">★</span>}
                  {review.url ? (
                    <a href={review.url} target="_blank" rel="noopener noreferrer" className="Reviews__link">
                      {review.title}
                    </a>
                  ) : (
                    <span className="Reviews__title">{review.title}</span>
                  )}
                  <span className="Reviews__author">{review.author}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="Reviews__footer">
        <Link title="Go back" url="/">
          Go back
        </Link>
      </section>
    </div>
  );
}

export default Reviews;

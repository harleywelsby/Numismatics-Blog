import { BlogPostLabel, BlogPostSummary } from '../components/Blog/Blog.types';

export const BlogPostSummaryData: BlogPostSummary[] = [
  {
    postId: 'geta-caracalla-and-divine-providence',
    filePath: '/BlogPosts/GetaCaracallaAndProvidence.md',
    title: 'Geta, Caracalla and "Divine Providence"',
    previewSrc: {
      src: '/Images/Blog/CaracallaGeta.webp',
      alt: 'Marble busts of Caracalla (left) and Geta (right)',
    },
    labels: [BlogPostLabel.SeveranDynasty, BlogPostLabel.RomanEmpire],
  },
  {
    postId: 'elagabalus-and-the-battle-of-antioch',
    filePath: '/BlogPosts/ElagabalusAtAntioch.md',
    title: 'Elagabalus and the Battle of Antioch',
    previewSrc: {
      id: 17,
    },
    labels: [BlogPostLabel.SeveranDynasty, BlogPostLabel.RomanEmpire],
  },
  {
    postId: 'the-republican-victoriatus',
    filePath: '/BlogPosts/GetaCaracallaAndProvidence.md',
    title: 'The Mystery of the Victoriatus',
    previewSrc: {
      id: 30,
    },
    labels: [BlogPostLabel.RomanRepublic, BlogPostLabel.PunicWars],
  },
];

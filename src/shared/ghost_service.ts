import { Article } from '../types/article';
import { ghostKey } from './config';

export const fetchGhostArticles = async (): Promise<Article[]> => {
    try {
        const res = await fetch(`https://efp-peinture.ghost.io/ghost/api/v4/content/posts?key=${ghostKey}`);
        const data = await res.json();
        const results = data;
        const articles: Article[] = results.posts;

        return articles;
    } catch (error) {
        if (error) {
            return error.message;
        }
    }

}

export const fetchGhostArticle = async (slug: string): Promise<Article> => {
    try {
        const res = await fetch(`https://efp-peinture.ghost.io/ghost/api/v4/content/posts/slug/${slug}/?key=${ghostKey}`);
        const data = await res.json();
        const results = data;

        const article: Article = results.posts[0];

        return article;
    }
    catch (error) {
        if (error) {
            return error.message;
        }
    }
}
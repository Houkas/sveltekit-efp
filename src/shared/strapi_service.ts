import { Article } from '../types/article';

export const fetchStrapiArticles = async (): Promise<Article[]> => {
    try {
        const res = await fetch(`http://localhost:1337/api/articles?populate=*`);
        const data = await res.json();
        const results = data;
        debugger;
        const articles = results.data;

        return articles;
    } catch (error) {
        if (error) {
            return error.message;
        }
    }

}

export const fetchStrapiArticle = async (slug: string): Promise<Article> => {
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
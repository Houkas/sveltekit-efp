import { Article } from '../types/article';
import { Partenaire } from '../types/partenaire';
import { Realisation } from '../types/realisation';
import { urlStrapiEfpDEV } from '../shared/config';

export const fetchStrapiArticles = async (): Promise<Article[]> => {
    try {
        const res = await fetch(`${urlStrapiEfpDEV}/api/articles?populate=*`);
        const data = await res.json();
        const results = data;
        const articles: Article[] = results.data;

        return articles;
    } catch (error) {
        if (error) {
            return error.message;
        }
    }

}

export const fetchStrapiArticle = async (slug: string): Promise<Article> => {
    try {
        const res = await fetch(`${urlStrapiEfpDEV}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
        const data = await res.json();
        const results = data;

        const article: Article = results.data[0];

        return article;
    }
    catch (error) {
        if (error) {
            return error.message;
        }
    }
}

export const fetchStrapiRealisations = async (): Promise<Realisation[]> => {
    try {
        const res = await fetch(`${urlStrapiEfpDEV}/api/realisations?populate=*`);
        const data = await res.json();
        const results = data;
        const realisations: Realisation[] = results.data;

        return realisations;
    } catch (error) {
        if (error) {
            return error.message;
        }
    }

}

export const fetchStrapiRealisation= async (slug: string): Promise<Realisation> => {
    try {
        const res = await fetch(`${urlStrapiEfpDEV}/api/realisations?filters[slug][$eq]=${slug}&populate=*`);
        const data = await res.json();
        const results = data;

        const realisation: Realisation = results.data[0];

        return realisation;
    }
    catch (error) {
        if (error) {
            return error.message;
        }
    }
}

export const fetchStrapiPartenaires = async (): Promise<Partenaire[]> => {
    try {
        const res = await fetch(`${urlStrapiEfpDEV}/api/partenaires?populate=*`);
        const data = await res.json();
        const results = data;

        const partenaire: Partenaire[] = results.data;

        return partenaire;
    }
    catch (error) {
        if (error) {
            return error.message;
        }
    }
}
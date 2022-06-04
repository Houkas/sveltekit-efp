import type { Article } from '../types/article';
import type { Partenaire } from '../types/partenaire';
import type { Realisation } from '../types/realisation';
import { urlStrapiEfpDEV } from '../shared/config';
import { apiArticlesData, apiRealisationsData } from './store.js';

export const fetchStrapiArticles = async (): Promise<Article[]> => {
    const res = await fetch(`${urlStrapiEfpDEV}/api/articles?populate=*`);
    if (res.ok) {
        const data = await res.json();
        const results = data;
        const articles: Article[] = results.data;

        //On set le store
        apiArticlesData.set(articles)
        return articles;
    } else {
        throw new Error('Erreur api Strapi for : ' + '"' + res.url + '"' + ' ' + res.status + ' ' + res.statusText);
    }

}

export const fetchStrapiArticle = async (slug: string): Promise<Article> => {
    const res = await fetch(`${urlStrapiEfpDEV}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    if (res.ok) {
        const data = await res.json();
        const results = data;
        const article: Article = results.data[0];
        return article;
    } else {
        throw new Error('Erreur api Strapi for : ' + '"' + res.url + '"' + ' ' + res.status + ' ' + res.statusText);
    }
}

export const fetchStrapiRealisations = async (): Promise<Realisation[]> => {
    const res = await fetch(`${urlStrapiEfpDEV}/api/realisations?populate=*`);
    if (res.ok) {
        const data = await res.json();
        const results = data;
        const realisations: Realisation[] = results.data;
        apiRealisationsData.set(realisations)
        return realisations;
    } else {
        throw new Error('Erreur api Strapi for : ' + '"' + res.url + '"' + ' ' + res.status + ' ' + res.statusText);
    }
}

export const fetchStrapiRealisation = async (slug: string): Promise<Realisation> => {
    const res = await fetch(`${urlStrapiEfpDEV}/api/realisations?filters[slug][$eq]=${slug}&populate=*`);
    if (res.ok) {
        const data = await res.json();
        const results = data;
        const realisation: Realisation = results.data[0];
        return realisation;
    } else {
        throw new Error('Erreur api Strapi for : ' + '"' + res.url + '"' + ' ' + res.status + ' ' + res.statusText);
    }
}

export const fetchStrapiPartenaires = async (): Promise<Partenaire[]> => {
    const res = await fetch(`${urlStrapiEfpDEV}/api/partenaires?populate=*`);
    if (res.ok) {
        const data = await res.json();
        const results = data;
        const partenaire: Partenaire[] = results.data;
        return partenaire;
    } else {
        throw new Error('Erreur api Strapi for : ' + '"' + res.url + '"' + ' ' + res.status + ' ' + res.statusText);
    }
}
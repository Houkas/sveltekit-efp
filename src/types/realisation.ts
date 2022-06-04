export type Realisation = {
    attributes: {
        title: string;
        createdAt: string;
        meta_description: string;
        slug: string;
        miniature: {
            data:{
                attributes:{
                    url: string;
                }
            }
        };
        images: string;
        body: string;
    }
}
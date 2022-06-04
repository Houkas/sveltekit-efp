export type Article = {
    attributes: {
        title: string;
        createdAt: string;
        meta_description: string;
        slug : string;
        miniature: {
            data:{
                attributes:{
                    url: string;
                }
            }
        };
        body: string;
    }
}
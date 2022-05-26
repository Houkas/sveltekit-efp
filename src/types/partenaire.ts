export type Partenaire = {
    attributes: {
        name: string;
        logo: {
            data: {
                attributes: {
                    url: string;
                }
            }
        };
    }
}
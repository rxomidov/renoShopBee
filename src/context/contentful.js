import * as contentful from 'contentful';

export const client = contentful.createClient({
    // This is the space ID. A space is like
    // a project folder in Contentful terms
    space: "xkon2av80jcq",
    // This is the access token for this space.
    // Normally you get both ID and the token in the
    // Contentful web app
    accessToken: "MwMZ8eWPVGqyIRzQcLB1_KAG-n2Zkapova8AHGUMjcU"
});

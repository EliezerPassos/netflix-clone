const API_KEY  =  "ab668a3c0188cad32e62a77434f4f202";
const API_BASE =  "https://api.themoviedb.org/3"


/*
-Originais netflix
-recomendamos
-top rate
-ação
-comedia
-terror
-romance
-documentario
*/

export default{

getHomelist: async ()=>{
    return[

        {
            slug:  'originals',
            title: 'originais do Netflix',
            items: []
        },

        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: []
        },

        {
            slug:  'toprated',
            title: 'Em Alta',
            items: []
        },

        {
            slug:  'action',
            title: 'Ação',
            items: []
        },
        {
            slug:  'comedy',
            title: 'Comedia',
            items: []
        },
        {
            slug:  'horror',
            title: 'terror',
            items: []
        },
        {
            slug:  'romance',
            title: 'Romance',
            items: []
        },
        {
            slug:  'documentary',
            title: 'Documentário',
            items: []
        },

    ];
}

}
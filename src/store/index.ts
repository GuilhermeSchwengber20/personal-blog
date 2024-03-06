
import { createStore } from "vuex";

interface State {
    posts: Array<any>
}

export default createStore({
    state: {
        posts: []
    } as State,

    mutations: {
        setPosts(state, articles: Array<any>) {
            state.posts = articles.map((article) => {
                return {
                  author: article.author,
                  title: article.title,
                  description: article.description,
                  urlToImage: article.urlToImage,
                  content: article.content,
                };
              });
        }
    },

    actions: {
        async fetchPosts({ commit }) {
            try {


              const cachedData = localStorage.getItem("cachedPosts");

              if(cachedData) {
                const cachedPosts = JSON.parse(cachedData);

                commit("setPosts", cachedPosts.slice(0, 15));

                return
              }

              const response = await fetch(
                "https://newsapi.org/v2/everything?q=brazil&sortBy=publishedAt&apiKey=5ff1844875374067839972ae0909eca3",
                {
                  method: "GET",
                }
              );
          
              if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
              }
          
              const jsonData = await response.json();

              const limitedPosts = jsonData.articles.slice(0, 15);

              localStorage.setItem("cachedPosts", JSON.stringify(limitedPosts))
          
              commit("setPosts", limitedPosts)
            } catch (error) {
              console.error(error);
              return [];
            }
        }
    }

})
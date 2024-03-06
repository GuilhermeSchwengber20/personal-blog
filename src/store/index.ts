
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
            
                commit("setPosts", jsonData.articles)
              } catch (error) {
                console.error(error);
                return [];
              }
        }
    }

})
<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free account today!</h2>
        <router-link to="#" class="router-button">Register for FireBlogs <Arrow class="arrow arrow-light" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import BlogCard from '../components/BlogCard'
  import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow
  },
  data(){
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus accusamus delectus alias dicta odit quasi doloremque possimus consequuntur quam, ea maiores aut nostrum suscipit odio iste magni quo obcaecati quos ducimus officia numquam nulla similique voluptas. Iste, temporibus tenetur.",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "This is a Filter Title!",
          blogHTML: "This is a filter blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filter Title2!",
          blogHTML: "This is a filter blog post title",
          blogCoverPhoto: "designed-for-everyone"
        }
      ],
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    user() {
      return this.$store.state.user
    }
  }
};
</script>
<style lang="scss" scoped>
  .blog-card-wrap {
    position: relative;
    padding: 80px 16px;
    background-color: #f1f1f1;
    @media (min-width: 500px) {
      padding: 100px 16px;
    }

    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }

    .blog-cards {
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr;

      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  .updates {
    .container {
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-height: 800px) {
        padding: 125px 25px;
        flex-direction: row;
      }

      .router-button {
        display: flex;
        font-size: 14px;
        text-decoration: none;
        
        @media (min-width: 800px) {
          margin-left: auto;
        }
      }

      h2 {
        font-weight: 300;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        margin-right: auto;
        @media(min-width: 800px) {
          text-align: initial;
          font-size: 40px;
        }
      }
    }
  }
</style>
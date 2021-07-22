import styles from "../styles/pages/index.module.scss";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import SocialMediasCard from "../components/SocialMediasCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <main className={styles.articlesContainer}>
          <h1>RECENT POSTS</h1>
          <div>
            {
              [1, 2, 3].map(item => <ArticleCard
                title="Dogs are awesome"
                text="Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Sit eget velit at erat auctor. 
              Urna ut arcu sit in non. Ligula quis quam in eros porttitor at at urna."
                imageURL="https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/main_puppies_1280p.jpg?itok=xmW0GNjG"
                createdAt="20/07/2020"
                createdBy="Guilherme"
              />)
            }
          </div>
          <div className="button">
            Postagens Mais Antigas
          </div>
        </main>
        <aside>
          <h1>Follow us</h1>
          <SocialMediasCard />
        </aside>
      </div>
      <Footer/>
    </>
  )
}
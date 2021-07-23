import Link from 'next/link';
import styles from "../styles/pages/index.module.scss";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import SocialMediasCard from "../components/SocialMediasCard";
import Footer from "../components/Footer";
import { Posts } from "../data/posts";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Template</title>
      </Head>
      <Header />
      <div className={styles.homeContainer}>
        <main className={styles.articlesContainer}>
          <h1>RECENT POSTS</h1>
          <div>
            {
              Posts.map(post => <Link href={`/post/${post.id}`}>
                <a>
                  <ArticleCard
                    title={post.title}
                    text={post.text.length <= 230 ? post.text : post.text.slice(0, 230) + ' ...'}
                    imageURL={post.imageURL}
                    createdAt={post.createdAt}
                    createdBy={post.author}
                  />
                </a>
              </Link>)
            }
          </div>
          <div className="button">
            Old posts
          </div>
        </main>
        <aside>
          <h1>Follow us</h1>
          <SocialMediasCard />
        </aside>
      </div>
      <Footer />
    </>
  )
}
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { useState, useEffect } from 'react';
import styles from "../../styles/pages/post.module.scss";
import Header from "../../components/Header";
import SocialMediasCard from "../../components/SocialMediasCard";
import Footer from "../../components/Footer";
import { getPost } from "../../data/posts";
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const post = getPost(parseInt(context.params.id as string));
  return {
    props: {
      post
    },
  }
}

export default function Page({ post }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header />
      <div className={styles.postContainer}>
        <main className={styles.articleContainer}>
          <h1>{post.title}</h1>
          <div>
            <img src={post.imageURL} alt="Post image" />
            <p>{post.text}</p>
          </div>
          <div>by {post.author} - {post.createdAt}</div>
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
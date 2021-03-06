/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BlockText } from '../components/BlockText'
import { Carousel } from '../components/Carousel'
import { EColor, Text } from '../components/Text'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Text As="h1" bold center>А вдруг СМА?</Text>
        <Text As='h2' center>Выберите, кто Ваш пациент:</Text>

        <div className={styles.card}>

          <div className={styles.cardItem}>
            <Text As='h3' color={EColor.secondary}>Взрослый</Text>
            <Image src="/imgCard1.png" alt="Взрослый" width={300} height={300} />
            <BlockText>Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте. </BlockText>
            <BlockText>По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.</BlockText>
            <BlockText>По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания. </BlockText>
          </div>

          <div className={styles.cardItem}>
            <Text As='h3' color={EColor.secondary}>Ребенок</Text>
            <Image src="/imgCard2.png" alt="Ребенок" width={300} height={300} />
            <BlockText>Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
              движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
              осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
              в отношении наличия СМА.
            </BlockText>
            <BlockText>Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
              терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
              дегенерации при прогрессировании заболевания
            </BlockText>
          </div>

        </div>

        <Text As='strong'>Сообщает ли один из ваших пациентов о следующих симптомах? <span className="more">(нажмите на любую иконку и узнайте больше)</span></Text>

        <Carousel />

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home

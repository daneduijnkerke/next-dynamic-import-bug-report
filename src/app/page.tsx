import Image from 'next/image'
import styles from './page.module.css'
import dynamic from "next/dynamic";

export default function Home() {
  const ContentA = dynamic(() => import('/src/app/Components/TestA'), {
    ssr: true,
    loading: () => <p>Loading...</p>,
  })

  const baseTemplateB = 'TestB';
  const ContentB = dynamic(() => import('/src/app/Components/' + baseTemplateB), {
    ssr: true,
    loading: () => <p>Loading...</p>,
  })

  const baseTemplateC = 'TestC';
  const ContentC = dynamic(() => import('/src/app/Components/' + baseTemplateC), {
    ssr: true,
    loading: () => <p>Loading...</p>,
  })

  return (
      <main className="test">
        <ContentA />
        <ContentB />
        <ContentC />
      </main>
  )
}

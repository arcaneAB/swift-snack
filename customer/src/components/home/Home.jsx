import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Navbar from '../Navbar'
import Category from '../Category'
import Menu from '../Menu'
import styled from 'styled-components'
import { db } from '../../services/Firebase'

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  const [menu, setMenu] = useState([])

  // console.log(menu)

  useEffect(() => {
    async function main() {
      const querySnapshot = await getDocs(collection(db, 'menu'))

      console.error('lol', querySnapshot)

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data())

        setMenu((menu) => [...menu, doc.data()])
      })
    }

    main()
  }, [])

  return (
    <Container>
      <Navbar />
      <Category />
      <Menu menu={menu} />
    </Container>
  )
}
export default Home

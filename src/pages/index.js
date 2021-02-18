import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Go from '@/components/dom/go'

const Sphere = dynamic(() => import('@/sandboxes/Sphere/Example'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Sphere' })
  return (
    <>
      <Sphere r3f />
      <Go />
    </>
  )
}

export default Page

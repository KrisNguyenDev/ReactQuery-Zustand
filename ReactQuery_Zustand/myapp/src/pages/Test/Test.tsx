import { useProfile } from '@/hooks'

const Test = () => {
  const { data } = useProfile()
  return (
    <div className="max-w-7xl mx-auto px-4 grid gap-4">
      <div className="block">
        <label>Id: </label>
        <input type="text" className="border" value={data?.data.id} />
      </div>
      <div className="block">
        <label>Name: </label>
        <input type="text" className="border" value={data?.data.name} />
      </div>
      <div className="block">
        <label>City: </label>
        <input type="text" className="border" value={data?.data.city} />
      </div>
      <div className="block">
        <label>Email: </label>
        <input type="text" className="border" value={data?.data.email} />
      </div>
    </div>
  )
}

export default Test

import { useTnxDetails } from '@/hooks/useTnx'
import { useSearchParams } from 'react-router-dom'

export default function TnxDetails() {
  const [SearchParams] = useSearchParams()
  const tnxId = SearchParams.get('tnxId') || ''
  const { data: tnxDetails, isLoading, isError } = useTnxDetails(tnxId)
  // eslint-disable-next-line no-debugger
  debugger
  if (isLoading) {
    return <div>Is loading...</div>
  }
  if (isError) {
    return <div>Error!!!</div>
  }
  return (
    <div>
      <h1>Transaction Details</h1>
      <div>Id: {tnxDetails?.data.id}</div>
      <div>Amount: {tnxDetails?.data.amount}</div>
      <div>Receiver: {tnxDetails?.data.receiver}</div>
      <div>Date: {tnxDetails?.data.date}</div>
      <div>Description: {tnxDetails?.data.description}</div>
    </div>
  )
}

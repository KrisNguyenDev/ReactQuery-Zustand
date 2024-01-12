import { useLogin } from '@/store/Login/useLogin'
import { Button, Checkbox, Form, Input, Modal } from 'antd'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onFinish = (values: any) => {
  console.log('Success:', values)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

type FieldType = {
  username?: string
  password?: string
  remember?: string
}
const Login = () => {
  const { openModal, setCloseModal, setOpenModal } = useLogin()
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button onClick={setOpenModal}>Open modal</Button>
      <Modal title="Basic Modal" open={openModal} onCancel={setCloseModal}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default Login

import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})

export default function Index() {
  return (
    <>
      <h1>Home</h1>
      <Button>
        <span>teste</span> Botão
      </Button>
    </>
  )
}

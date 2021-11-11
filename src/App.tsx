import React from 'react'

function App() {
  const [items, setItems] = React.useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7'
  ])

  // Função para alterar os itens do array
  const handleChangeItem = (index: number, _items: Array<string>) => {
    const newItems = [..._items] // Fazendo uma cópia do array recebi por parâmetro
    
    newItems[index] = `Item ${index + 1} (changed)` // Alterando o item do array

    setItems(newItems) // Atualizando o array

    if(items[index + 1]){ // Se existir um item a seguir ao que foi alterado
      setTimeout(() => {
        handleChangeItem(index + 1, newItems) // Chama a função novamente, passando o próximo item
      }, 1000)
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      handleChangeItem(0, items) // Chama a função, passando o primeiro item
    }, 1000)
  }, [])

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

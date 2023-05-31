function MenuItem({ name, price }) {
  return (
    <>
      <p>
        <strong>{name}</strong> | {price}
      </p>
    </>
  )
}

function App() {
  return (
    <>
      <h1>Uncle Haris Fried Chicken</h1>
      <Category title={"Fried Chicken"} foods={friedChicken} />
      <Category title={"Dessert"} foods={dessert} />
    </>
  )
}

function Category({ title, foods }) {
  return (
    <div>
      <h2>{title}</h2>
      {foods}
    </div>
  )
}

const friedChicken = (
  <>
    <MenuItem name={"2pc Fried Chicken Set"} price={"RM 10.00"} />
    <MenuItem name={"6 piece nugget"} price={"RM 6.00"} />
  </>
)

const dessert = (
  <>
    <MenuItem name={"Chocolate Sundae"} price={"RM 5.00"} />
    <MenuItem name={"Apple Pie"} price={"RM 3.00"} />
  </>
)
export default App;
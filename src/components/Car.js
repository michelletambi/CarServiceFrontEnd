const Car = ({car}) => {

    const {manufacturer, model, price, stock} = car

    return (
        <>
            <h3>Manufacturer: {manufacturer}</h3>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Stock: {stock}</p>
        </>
    )
}

export default Car;

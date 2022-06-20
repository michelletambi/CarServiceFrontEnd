const Car = ({car}) => {

    const {manufacturer, model, price} = car

    return (
        <>
            <h3>Manufacturer: {manufacturer}</h3>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
        </>
    )
}

export default Car;

const Car = ({car}) => {

    const {id, model, manufacturer} = car

    return (
        <>
            <h3>Manufacturer: {manufacturer}</h3>
        </>
    )
}

export default Car;

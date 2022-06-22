const Customer = ({customer}) => {

    const {name, username, email, password, address, mobile} = customer

    return (
        <section>
            <div>
                <h2>Personal Details</h2>
                <p>Name: {name}</p>
                <p>Address: {address}</p>
                <p>Mobile: {mobile}</p>
                <p>Email: {email}</p>
            </div>
            <div>
                <h2>Account Security</h2>
                <p>User Name: {username}</p>
                <p>Password: {password}</p>
            </div>
        </section>
    );
}


export default Customer;
function Home({name, user}){

    return(
        <div>
             <h1 className="title">Twitter<strong>Threader</strong>App</h1>
             <p>Welcome, {user.name}!</p>
             <img className = "homephoto" alt="home"/>
        </div>
 
    )
}

export default Home;
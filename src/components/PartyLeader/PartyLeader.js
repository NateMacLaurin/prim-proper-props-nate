function PartyLeader({leader}){
    return(
        <>
        <h2>Party Leader</h2>
        {leader[0] && <h3>{leader[0].name}</h3>}
        </>
    )
}

export default PartyLeader
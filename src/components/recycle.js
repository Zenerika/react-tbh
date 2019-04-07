<div className="container" width="100vw" height="100vh">
<div className="columns is-mobile is-centered is-vcentered">
    <div className="column is-half">
      <div>To-Do List</div>
      <div>Bills</div>
      <div>Medical</div>
    </div>
    <div className="column is-half">
      <div>Groceries</div>
      <div>Fitness</div>
      <div>Calendar</div>
    </div>
  </div>
</div>
</div>


// /ignore

<div>
<div className="tbh-cards">
  <div className="tbh-row">
    <div className="tbh-card-item"><h1>To-Do List</h1>
      <Link to="/todo"><img src={Todo} width="80px" alt="chores"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Chores</h1>
      <Link to="/chores"><img src={Chores} width="80px" alt="bills"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Groceries</h1>
      <Link to="/groceries"><img src={Groceries} width="80px" alt="groceries"/></Link>
    </div>
  </div>
  <div className="columns">
    <div className="column"><h1>Auto</h1>
      <Link to="/auto"><img src={Auto} width="80px" alt="chores"/></Link>
    </div>
    <div className="column"><h1>Bills</h1>
      <Link to="/bills"><img src={Bills} width="80px" alt="bills"/></Link>
    </div>
    <div className="column"><h1>Pets</h1>
      <Link to="/pets"><img src={Pets} width="80px" alt="bills"/></Link>
    </div>
  </div>
  <div className="tbh-row">
    <div className="tbh-card-item"><h1>Medical</h1>
      <Link to="/medical"><img src={Medical} width="80px" alt="medical"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Calendar</h1>
      <Link to="/calendar"><img src={Calendar} width="80px" alt="calendar"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Fitness</h1>
      <Link to="/fitness"><img src={Fitness} width="80px" alt="fitness"/></Link>
    </div>
  </div>
  </div>
</div>

// columns and columns
<div>
<div className="columns">
  <div className="column is-half">
    <div className="tbh-card-item"><h1>To-Do List</h1>
      <Link to="/todo"><img src={Todo} width="80px" alt="chores"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Groceries</h1>
      <Link to="/groceries"><img src={Groceries} width="80px" alt="groceries"/></Link>
    </div>
    <div className="column"><h1>Bills</h1>
      <Link to="/bills"><img src={Bills} width="80px" alt="bills"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Medical</h1>
      <Link to="/medical"><img src={Medical} width="80px" alt="medical"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Fitness</h1>
      <Link to="/fitness"><img src={Fitness} width="80px" alt="fitness"/></Link>
    </div>
  </div>
  <div className="column is-half">
    <div className="tbh-card-item"><h1>Chores</h1>
      <Link to="/chores"><img src={Chores} width="80px" alt="chores"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Auto</h1>
      <Link to="/auto"><img src={Auto} width="80px" alt="auto"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Pets</h1>
      <Link to="/pets"><img src={Pets} width="80px" alt="pets"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Calendar</h1>
      <Link to="/calendar"><img src={Calendar} width="80px" alt="calendar"/></Link>
    </div>
    <div className="tbh-card-item"><h1>Chatbot</h1>
      <Link to="/chat"><img src={Todo} width="80px" alt="chat"/></Link>
    </div>
  </div>
  </div>
</div>
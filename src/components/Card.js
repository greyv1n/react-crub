function Card({ id, name, phone, cbEdit, editing, cbRemove }) {
    return (
        <>
            <div className='card'>
                <div className='card-item'>{name}</div>
                <div className='card-item'>{phone}</div>
                <div className='card-item'>
                    <button 
                    disabled={editing} 
                    onClick={() => cbEdit(id)}>Edit</button>
                    <button onClick={() => cbRemove(id)}>Delete</button>
                </div>
            </div>
        </>
    )
}

export { Card };
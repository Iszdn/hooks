import useToggle from '../CustomHook'


function AdminNavbar() {
    const [open, handleClick] = useToggle()
    const [open1, handleClick1] = useToggle()
    const [open2, handleClick2] = useToggle()


    return (
        <div className='nav-home'>
            <h3>navbar</h3>
            <button onClick={handleClick}>{open ? "+" : "-"}</button>
            <hr />
            <h3>navbar</h3>
            <button onClick={handleClick1}>{open1 ? "+" : "-"}</button>
            <hr />
            <h3>navbar</h3>
            <button onClick={handleClick2}>{open2 ? "+" : "-"}</button>
            <hr />
        </div>
    )
}

export default AdminNavbar
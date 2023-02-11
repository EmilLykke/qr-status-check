
function Logout() {
    localStorage.clear();
    window.location.href = "/";
    return (
        <div>Logout</div>
    )
}

export default Logout
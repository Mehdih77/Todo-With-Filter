export default function Footer() {
    return (
        <footer className="row">
            <label htmlFor="">
                <input type="checkbox" name="all" id="all" />
                    All
            </label>
            <p>You have 0 to do</p>
            <button id="delete">Delete</button>
        </footer>
    )
}

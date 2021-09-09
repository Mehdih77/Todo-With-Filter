export default function FormInput() {
    return (
        <form autoComplete='off'>
            <input type="text" name='todos' id='todos'
            required placeholder='What need to be done..' />
            <button type='submit'>Create</button>
        </form>
    )
}

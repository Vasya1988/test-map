import classes from './EnterTitle.module.sass';

const EnterTitle = () => {
    
    return (
        <form
            className={classes.EnterTitle}
        >
            <input type='enter' placeholder='Enter city' />
        </form>
    )
}
export default EnterTitle;
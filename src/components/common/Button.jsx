export default function Button({children, classNames, ...props}){
    let classes = "px-4 py-2 rounded " + classNames
    return <button className={classes} {...props}>{children}</button>
}